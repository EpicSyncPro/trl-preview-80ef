// Mobile menu only. The shells work without JS; no motion, so nothing starts hidden.
(() => {
  document.querySelectorAll("[data-menu]").forEach((b) => {
    const nav = document.getElementById(b.getAttribute("aria-controls"));
    b.addEventListener("click", () => { const o = b.getAttribute("aria-expanded") === "true"; b.setAttribute("aria-expanded", String(!o)); nav.classList.toggle("open", !o); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { b.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); b.focus(); } });
  });
})();
