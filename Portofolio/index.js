document.querySelectorAll(".proj button").forEach(function (b) {
  b.addEventListener("click", function () {
    var p = b.parentElement,
      o = p.classList.toggle("open");
    b.setAttribute("aria-expanded", o);
  });
});
var fab = document.getElementById("homeFab");
function toggleFab() {
  fab.classList.toggle("show", window.scrollY > 300);
}
window.addEventListener("scroll", toggleFab, { passive: true });
toggleFab();
fab.querySelector("button").addEventListener("click", function () {
  window.scrollTo({ top: 0 });
});
