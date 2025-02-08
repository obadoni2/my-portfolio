// Wrap all DOM-dependent code inside DOMContentLoaded
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
  
    // Project Slider Functionality (Auto & Manual)
    document.querySelectorAll('.project-slider').forEach(slider => {
      let slideIndex = 0;
      const slidesContainer = slider.querySelector('.slides');
      const totalSlides = slidesContainer.children.length;
  
      const updateSlider = () => {
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
      };
  
      // Manual navigation with Next button
      const nextButton = slider.querySelector('.next');
      nextButton.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
      });
  
      // Manual navigation with Previous button
      const prevButton = slider.querySelector('.prev');
      prevButton.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
      });
  
      // Advance slide when clicking on the visible image
      // This allows a click on the image to manually advance the slide.
      slider.querySelectorAll('.slide img').forEach(image => {
        image.addEventListener('click', () => {
          slideIndex = (slideIndex + 1) % totalSlides;
          updateSlider();
        });
      });
  
      // Automatic sliding every 5 seconds (5000 milliseconds)
      setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
      }, 5000);
    });
  });
  