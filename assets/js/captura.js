(() => {
  "use strict";

  const form = document.querySelector("#kit-lead-form");

  if (!form) {
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const statusMessage = form.querySelector("#form-status");
  const defaultButtonText = submitButton.textContent.trim();
  const fieldErrorIds = {
    nome: "nome-erro",
    email: "email-erro",
    whatsapp: "whatsapp-erro",
  };

  let isSubmitting = false;

  const clearFieldError = (fieldName) => {
    const field = form.elements.namedItem(fieldName);
    const errorElement = document.querySelector(
      `#${fieldErrorIds[fieldName]}`,
    );

    if (field) {
      field.removeAttribute("aria-invalid");
    }

    if (errorElement) {
      errorElement.textContent = "";
      errorElement.hidden = true;
    }
  };

  const clearErrors = () => {
    Object.keys(fieldErrorIds).forEach(clearFieldError);
    statusMessage.textContent = "";
    statusMessage.className = "form-message";
    statusMessage.hidden = true;
  };

  const showStatus = (message, type = "error") => {
    statusMessage.textContent = message;
    statusMessage.className = `form-message form-message--${type}`;
    statusMessage.setAttribute("role", type === "error" ? "alert" : "status");
    statusMessage.hidden = false;
  };

  const showFieldErrors = (errors = {}) => {
    let firstInvalidField = null;

    Object.entries(errors).forEach(([fieldName, message]) => {
      const field = form.elements.namedItem(fieldName);
      const errorElement = document.querySelector(
        `#${fieldErrorIds[fieldName]}`,
      );

      if (!field || !errorElement) {
        return;
      }

      field.setAttribute("aria-invalid", "true");
      errorElement.textContent = message;
      errorElement.hidden = false;
      firstInvalidField ||= field;
    });

    firstInvalidField?.focus();
  };

  const setSubmitting = (submitting) => {
    isSubmitting = submitting;
    submitButton.disabled = submitting;
    submitButton.setAttribute("aria-busy", String(submitting));
    submitButton.textContent = submitting
      ? "Enviando..."
      : defaultButtonText;
  };

  Object.keys(fieldErrorIds).forEach((fieldName) => {
    const field = form.elements.namedItem(fieldName);

    field?.addEventListener("input", () => {
      clearFieldError(fieldName);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    clearErrors();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      nome: String(formData.get("nome") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
    };

    setSubmitting(true);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        showStatus(
          result?.message ||
            "Não foi possível concluir seu cadastro agora. Tente novamente.",
        );
        showFieldErrors(result?.errors);
        return;
      }

      showStatus("Cadastro realizado. Redirecionando...", "success");
      form.reset();
      window.location.assign("/obrigado/atividades-de-matematica/");
    } catch {
      showStatus(
        "Não foi possível conectar agora. Verifique sua internet e tente novamente.",
      );
    } finally {
      setSubmitting(false);
    }
  });

  window.addEventListener("pageshow", () => {
    setSubmitting(false);
  });
})();
