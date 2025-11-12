// Smooth scroll button
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form feedback
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("formMsg").textContent = "✅ Message sent successfully!";
  this.reset();
});

// Reveal on scroll
window.addEventListener("scroll", revealElements);

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
