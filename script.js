// Smooth scroll button
function goToCollection() {
    document.getElementById("collection").scrollIntoView({
        behavior: "smooth"
    });
}


// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.9)";
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.background = "transparent";
    }
});


// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .about, .collection h2").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// Contact form submit (frontend demo)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully! (Demo)");

    this.reset();
});
