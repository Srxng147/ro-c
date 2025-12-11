// Interactive Map Functionality
document.addEventListener("DOMContentLoaded", () => {
  const mapDots = document.querySelectorAll(".map-dot");
  const Modal = window.bootstrap.Modal;
  const modal = new Modal(document.getElementById("locationModal"));
  const modalTitle = document.getElementById("locationModalTitle");
  const modalBody = document.getElementById("locationModalBody");

  // Location data for each dot
  const locationData = {
    "North America": {
      title: "dot1",
      content:
        "something here",
    },
    "Central America": {
      title: "dot2",
      content:
        "something here",
    },
    "South America - Brazil": {
      title: "dot3",
      content:
        "something here",
    },
    "South America - Peru": {
      title: "dot4",
      content:
        "something here",
    },
    Europe: {
      title: "dot5",
      content:
        "something here",
    },
    "Africa - West": {
      title: "dot6",
      content:
        "something here",
    },
    "Africa - East": {
      title: "dot7",
      content:
        "something here",
    },
    "Africa - South": {
      title: "dot8",
      content:
        "something here",
    },
    "Middle East": {
      title: "dot9",
      content:
        "something here",
    },
    India: {
      title: "dot10",
      content:
        "something here",
    },
    China: {
      title: "dot11",
      content:
        "something here",
    },
    "Southeast Asia": {
      title: "dot12",
      content:
        "something here",
    },
    Indonesia: {
      title: "dot13",
      content:
        "something here",
    },
  };

  // Add click event listeners to map dots
  mapDots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const location = this.getAttribute("data-location");
      const data = locationData[location];

      if (data) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = `
                    <p>${data.content}</p>
                `
        modal.show();
      }
    });

    // Add hover effect
    dot.addEventListener("mouseenter", function () {
      this.style.transform = "translate(-50%, -50%) scale(1.3)"
      this.style.zIndex = "20"
    });

    dot.addEventListener("mouseleave", function () {
      this.style.transform = "translate(-50%, -50%) scale(1)"
      this.style.zIndex = "10"
    });
  });

  // Gallery lightbox functionality
  const galleryImages = document.querySelectorAll(".gallery-img");
  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      // Create lightbox modal
      const lightboxModal = document.createElement("div");
      lightboxModal.className = "modal fade";
      lightboxModal.innerHTML = `
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Gallery Image</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body text-center">
                            <img src="${this.src}" class="img-fluid" alt="${this.alt}">
                        </div>
                    </div>
                </div>
            `;
      document.body.appendChild(lightboxModal);

      const modal = new Modal(lightboxModal);
      modal.show();

      // Remove modal from DOM when hidden
      lightboxModal.addEventListener("hidden.bs.modal", () => {
        document.body.removeChild(lightboxModal);
      });
    });
  });

  // Smooth scrolling for navigation links
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

  // Counter animation for statistics
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    }
    updateCounter();
  }

  // Intersection Observer for counter animation
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".display-3, .display-1");
        counters.forEach((counter) => {
          const text = counter.textContent.replace(/,/g, "");
          const number = Number.parseInt(text.match(/\d+/)?.[0] || "0");
          if (number > 0) {
            animateCounter(counter, number);
          }
        })
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe statistics sections
  const statsSection = document.querySelector(".stats-section");
  const beyondSection = document.querySelector(".beyond-cleanup");

  if (statsSection) observer.observe(statsSection);
  if (beyondSection) observer.observe(beyondSection);

  console.log("Plastic Cleanup website initialized successfully");
})
