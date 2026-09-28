/* Selector de modo Pasajeros / Carga, compartido en todas las páginas.
   Persiste en localStorage y alterna bloques [data-mode-section]. */
(function () {
  var STORAGE_KEY = "artefact-mode";
  var currentFile = location.pathname.split("/").pop();
  var isHome = currentFile === "" || currentFile === "index.html";
  var mode = "pax";
  if (!isHome) {
    try {
      mode = localStorage.getItem(STORAGE_KEY) || "pax";
    } catch (e) {}
  } else {
    /* index.html es el punto de entrada del sitio: siempre abre en
       Pasajeros, sin importar una selección de Carga previa. */
    try {
      localStorage.setItem(STORAGE_KEY, "pax");
    } catch (e) {}
  }

  function applySections() {
    document.querySelectorAll("[data-mode-section]").forEach(function (el) {
      el.style.display = el.getAttribute("data-mode-section") === mode ? "" : "none";
    });
  }

  function applyToggleUI() {
    document.querySelectorAll(".mode-pill span").forEach(function (span) {
      var isActive = span.getAttribute("data-mode-value") === mode;
      span.classList.toggle("active", isActive);
      span.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setMode(next) {
    if (next !== "pax" && next !== "cargo") return;
    mode = next;
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {}
    document.documentElement.setAttribute("data-mode", mode);
    applySections();
    applyToggleUI();
    if (window.__retranslate) window.__retranslate();
    window.dispatchEvent(new CustomEvent("modechange", { detail: mode }));
  }

  document.documentElement.setAttribute("data-mode", mode);
  applySections();
  applyToggleUI();

  document.querySelectorAll(".mode-pill span").forEach(function (span) {
    span.addEventListener("click", function () {
      setMode(span.getAttribute("data-mode-value"));
    });
    span.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setMode(span.getAttribute("data-mode-value"));
      }
    });
  });

  window.__setMode = setMode;
})();
