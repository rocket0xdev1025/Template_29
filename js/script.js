// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Add initial styles for animation
  const animatedElements = document.querySelectorAll(
    ".tokenomics-card, .token-info, .social-link, .png-link"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add hover effects for cards
document.querySelectorAll(".tokenomics-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add click tracking for social links (optional analytics)
document.querySelectorAll(".social-link, .png-link").forEach((link) => {
  link.addEventListener("click", function () {
    console.log("Social link clicked:", this.href);
    // Add analytics tracking here if needed
  });
});

// Parallax effect for background
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".background-pattern");
  const speed = scrolled * 0.5;

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }

  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick);

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.5s ease";
});

// Initialize page
document.body.style.opacity = "0";

// Create falling stars animation
function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.innerHTML = "⭐";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  star.style.animationDelay = Math.random() * 2 + "s";

  return star;
}

function initFallingStars() {
  const starsContainer = document.createElement("div");
  starsContainer.className = "falling-stars";
  document.body.appendChild(starsContainer);

  // Create initial stars
  for (let i = 0; i < 15; i++) {
    const star = createStar();
    starsContainer.appendChild(star);
  }

  // Continuously add new stars
  setInterval(() => {
    const star = createStar();
    starsContainer.appendChild(star);

    // Remove star after animation completes
    setTimeout(() => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, 5000);
  }, 500);
}

// Initialize falling stars when page loads
document.addEventListener("DOMContentLoaded", () => {
  initFallingStars();
});
