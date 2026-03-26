function scrollToSection() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");

  nav.classList.toggle("active");
  overlay.classList.toggle("active");
}
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  });
});
document.addEventListener("click", function (e) {
  const nav = document.getElementById("navLinks");
  const menuBtn = document.querySelector(".menu-toggle");

  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    nav.classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }
});

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

// Whatsapp + sheets
const form = document.getElementById("contactForm");
const loader = document.getElementById("loader");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwSU7itISsZ9zaS_H-RvXvsVRqaE2GryzrqZUziYy43UVUSmsBjIzhfuOePKOU_GV43IQ/exec";

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // loader show
  loader.style.display = "flex";

  let formData = new FormData(form);

  let name = formData.get("name");
  let email = formData.get("email");
  let message = formData.get("message");

  try {
    //  send to Google Sheets
    await fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams({
        name: name,
        email: email,
        message: message,
      }),
    });

    //  WhatsApp message
    let whatsappMessage = `:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    //  open WhatsApp
    window.open(`https://wa.me/917249853816?text=${whatsappMessage}`, "_blank");

    form.reset();
  } catch (error) {
    alert("Something went wrong!");
  }

  // loader hide
  loader.style.display = "none";
});
