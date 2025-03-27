// Smooth Navbar Animation
window.addEventListener("scroll", function() {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// GSAP Animations
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 30, duration: 1, delay: 0.3 });

// Hamburger Menu Toggle
document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});