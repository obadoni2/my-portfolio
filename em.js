// Function to add "show" class when the section is in the viewport
function revealSections() {
    const sections = document.querySelectorAll('.about-section, .projects-section');
  
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 150) {
        section.classList.add('show');
      }
    });
  }
  
  // Call revealSections when the user scrolls
  window.addEventListener('scroll', revealSections);
  
  // Call on page load to handle initial state
  window.addEventListener('load', revealSections);
  