const elements = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
});

elements.forEach(el => {
el.classList.add("fade");
observer.observe(el);
});
