// Navbar Background Change on Scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// GSAP Hero Animations
gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
gsap.from(".hero-content p", { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: "power2.out" });
gsap.from(".explore-btn", { opacity: 0, scale: 0.8, duration: 1, delay: 0.6, ease: "back.out(1.7)" });

// Smooth scrolling effect
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            gsap.to(window, { scrollTo: target, duration: 1, ease: "power2.inOut" });
        }
    });
});