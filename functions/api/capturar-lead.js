const BREVO_CONTACTS_ENDPOINT = "https://api.brevo.com/v3/contacts";
const BREVO_TIMEOUT_MS = 10000;
const MAX_REQUEST_BYTES = 8192;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=UTF-8",
      "X-Content-Type-Options": "nosniff",
    },
  });

const normalizeName = (value) =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";

const normalizeEmail = (value) =>
  typeof value === "string" ? value.trim().toLowerCase() : "";

const normalizeWhatsApp = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return { value: "" };
  }

  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("00")) {
    digits = digits.slice(2);
  }

  if (digits.length === 10 || digits.length === 11) {
    digits = `55${digits}`;
  }

  if (
    !digits.startsWith("55") ||
    (digits.length !== 12 && digits.length !== 13)
  ) {
    return {
      error: "Informe um WhatsApp brasileiro válido, com DDD.",
      value: "",
    };
  }

  return { value: `+${digits}` };
};

const validatePayload = (payload) => {
  const nome = normalizeName(payload?.nome);
  const email = normalizeEmail(payload?.email);
  const whatsapp = normalizeWhatsApp(payload?.whatsapp);
  const errors = {};

  if (!nome) {
    errors.nome = "Informe seu nome.";
  } else if (nome.length > MAX_NAME_LENGTH) {
    errors.nome = "O nome informado é muito longo.";
  }

  if (!email) {
    errors.email = "Informe seu e-mail.";
  } else if (
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email)
  ) {
    errors.email = "Informe um e-mail válido.";
  }

  if (whatsapp.error) {
    errors.whatsapp = whatsapp.error;
  }

  return {
    data: {
      email,
      nome,
      whatsapp: whatsapp.value,
    },
    errors,
  };
};

const brevoErrorResponse = (status) => {
  if (status === 429) {
    return jsonResponse(
      {
        ok: false,
        message:
          "Recebemos muitas solicitações agora. Aguarde um momento e tente novamente.",
      },
      503,
    );
  }

  if (status >= 500) {
    return jsonResponse(
      {
        ok: false,
        message:
          "O serviço de cadastro está temporariamente indisponível. Tente novamente em alguns minutos.",
      },
      503,
    );
  }

  return jsonResponse(
    {
      ok: false,
      message:
        "Não foi possível concluir seu cadastro agora. Confira os dados e tente novamente.",
    },
    502,
  );
};

export async function onRequestPost({ request, env }) {
  const requestUrl = new URL(request.url);
  const requestOrigin = request.headers.get("Origin");

  if (requestOrigin && requestOrigin !== requestUrl.origin) {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível validar a origem da solicitação.",
      },
      403,
    );
  }

  const contentType = request.headers.get("Content-Type") || "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse(
      {
        ok: false,
        message: "Formato de envio inválido. Atualize a página e tente novamente.",
      },
      415,
    );
  }

  const contentLength = Number(request.headers.get("Content-Length") || 0);

  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonResponse(
      {
        ok: false,
        message: "Os dados enviados excedem o tamanho permitido.",
      },
      413,
    );
  }

  let rawBody;

  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse(
      {
        ok: false,
        message: "Não foi possível ler os dados enviados. Tente novamente.",
      },
      400,
    );
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    return jsonResponse(
      {
        ok: false,
        message: "Os dados enviados excedem o tamanho permitido.",
      },
      413,
    );
  }

  let payload;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse(
      {
        ok: false,
        message: "Os dados enviados são inválidos. Atualize a página e tente novamente.",
      },
      400,
    );
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return jsonResponse(
      {
        ok: false,
        message: "Os dados enviados são inválidos. Atualize a página e tente novamente.",
      },
      400,
    );
  }

  const { data, errors } = validatePayload(payload);

  if (Object.keys(errors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        message: "Confira os campos destacados e tente novamente.",
        errors,
      },
      400,
    );
  }

  const listId = Number(env.BREVO_LIST_ID);

  if (
    !env.BREVO_API_KEY ||
    !Number.isInteger(listId) ||
    listId <= 0
  ) {
    console.error("Brevo integration is missing required environment values.");

    return jsonResponse(
      {
        ok: false,
        message:
          "O cadastro está temporariamente indisponível. Tente novamente em alguns minutos.",
      },
      500,
    );
  }

  const attributes = {
    FIRSTNAME: data.nome,
  };

  if (data.whatsapp) {
    attributes.SMS = data.whatsapp;
  }

  let brevoResponse;
  const abortController = new AbortController();
  const timeoutId = setTimeout(
    () => abortController.abort(),
    BREVO_TIMEOUT_MS,
  );

  try {
    brevoResponse = await fetch(BREVO_CONTACTS_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        attributes,
        email: data.email,
        listIds: [listId],
        updateEnabled: true,
      }),
      signal: abortController.signal,
    });
  } catch (error) {
    console.error("Brevo API request failed.", {
      message: error instanceof Error ? error.message : "Unknown fetch error",
    });

    return jsonResponse(
      {
        ok: false,
        message:
          error instanceof Error && error.name === "AbortError"
            ? "O serviço de cadastro demorou para responder. Tente novamente."
            : "Não foi possível conectar ao serviço de cadastro. Tente novamente em alguns minutos.",
      },
      503,
    );
  } finally {
    clearTimeout(timeoutId);
  }

  if (!brevoResponse.ok) {
    console.error("Brevo API returned an error.", {
      status: brevoResponse.status,
    });

    return brevoErrorResponse(brevoResponse.status);
  }

  return jsonResponse({
    ok: true,
    message: "Cadastro realizado com sucesso.",
  });
}
