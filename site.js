// Shared behaviour for every page: header border, reveal-on-scroll, story line, CV link, year.
const CV_URL = ""; // TODO(Namrata): add an up-to-date CV, e.g. "assets/Namrata_Bhatia_CV.pdf"

const header = document.querySelector(".top");
const onScrollTop = () => header && header.classList.toggle("scrolled", scrollY > 8);
addEventListener("scroll", onScrollTop, { passive: true }); onScrollTop();

const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add(e.target.classList.contains("line") ? "drawn" : "in");
  io.unobserve(e.target);
}), { threshold: .2, rootMargin: "0px 0px -6% 0px" });
document.querySelectorAll(".reveal, .line").forEach(n => io.observe(n));

document.querySelectorAll("[data-cv]").forEach(a => { if (CV_URL) { a.href = CV_URL; a.hidden = false; } });
document.querySelectorAll("[data-year]").forEach(n => n.textContent = new Date().getFullYear());
