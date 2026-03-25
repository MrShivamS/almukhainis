function scrollToSection() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
}
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 4500);

// Auto Slide (important for professional feel)
setInterval(nextSlide, 4500);

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycbwIyqf2sQ6cVq8GZe9_kYdsTXS4YNrRVChObTFprOrfsgFK8z1ujFD6amYhc0994N_v5g/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: formData, // 🔥 NOT JSON
    },
  ).then(() => {
    alert("Message sent!");
    form.reset();
  });
});
