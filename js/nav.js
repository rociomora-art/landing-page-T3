/* Navegación compartida: scroll suave a anclas dentro de la misma página.
   Usado en todas las páginas para enlaces internos tipo href="#seccion". */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function scrollToSection(hash, updateHistory = false, behavior = "smooth") {
  const target = document.querySelector(hash);
  if (!target) return;
  const headerOffset = 92;
  const top = target.offsetTop - headerOffset;
  window.scrollTo({ top, behavior });
  if (updateHistory) history.pushState(null, "", hash);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;
    event.preventDefault();
    scrollToSection(hash, true);
  });
});

window.addEventListener("hashchange", () => scrollToSection(window.location.hash));

/* Resalta en el header el link de la página en la que está el usuario,
   para orientar en qué sección se encuentra. */
(function highlightActiveNavLink() {
  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkFile = link.getAttribute("href").split("#")[0];
    if (linkFile === currentFile) link.classList.add("active");
  });
})();
