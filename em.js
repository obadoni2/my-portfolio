// Wrap all DOM-dependent code inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Project Slider Functionality (with Auto Slide)
    document.querySelectorAll('.project-slider').forEach(slider => {
      let slideIndex = 0;
      const slides = slider.querySelector('.slides');
      const totalSlides = slides.children.length;
  
      const updateSlider = () => {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
      };
  
      // Next button
      slider.querySelector('.next').addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
      });
  
      // Previous button
      slider.querySelector('.prev').addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
      });
  
      // Auto slide every 5 seconds (5000 milliseconds)
      setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
      }, 5000);
    });
  
    // Lightbox Functionality for Slide Images
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    // Attach click event listeners to all images within slides
    document.querySelectorAll('.slide img').forEach(image => {
      image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightbox.style.display = 'flex';
      });
    });
  
    // Close lightbox when the close button is clicked
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    // Optional: Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });
  

