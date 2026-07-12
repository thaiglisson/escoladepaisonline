(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (!menuToggle || !siteNav) {
    return;
  }

  const menuLabel = menuToggle.querySelector(".menu-toggle__label");
  const desktopMedia = window.matchMedia("(min-width: 64rem)");

  const setMenuState = (isOpen, returnFocus = false) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    siteNav.classList.toggle("is-open", isOpen);

    if (menuLabel) {
      menuLabel.textContent = isOpen ? "Fechar menu" : "Abrir menu";
    }

    if (returnFocus) {
      menuToggle.focus();
    }
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a") && !desktopMedia.matches) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuToggle.getAttribute("aria-expanded") === "true"
    ) {
      setMenuState(false, true);
    }
  });

  desktopMedia.addEventListener("change", () => {
    setMenuState(false);
  });
})();
