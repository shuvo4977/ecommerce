/**
 * Main Nav Menu Item Active Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  let navMenu = document.querySelectorAll('.main-nav-menu ul li a');

  navMenu.forEach((menuItem)=>{
    menuItem.addEventListener('click', (e)=>{
      navMenu.forEach((item) => {
        item.classList.remove('active', 'text-primary', 'border-b-2',);
        item.classList.add('text-white');
      });

      e.target.classList.add('active', 'text-primary', 'border-b-2', 'border-primary');
      e.target.classList.remove('text-white');
    })

  })
});




/**
 * Main Sidebar Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  const sidebarContent = sidebar.querySelector('div');

  const hideSidebar = () => {
    sidebar.classList.add('opacity-0', 'pointer-events-none');
    sidebarContent.classList.add('-translate-x-full');
  };

  const showSidebar = () => {
    sidebar.classList.remove('opacity-0', 'pointer-events-none');
    sidebarContent.classList.remove('-translate-x-full');
  };

  mobileMenuBtn.addEventListener('click', showSidebar);

  closeSidebar.addEventListener('click', hideSidebar);

  sidebar.addEventListener('click', (e) => {
    if (e.target === sidebar) {
      hideSidebar();
    }
  });

  const checkScreenWidth = () => {
    if (window.innerWidth > 989) {
      hideSidebar();
    }
  };

  checkScreenWidth();

  window.addEventListener('resize', checkScreenWidth);
});





/**
 * Hero Animated Heading
 */
document.addEventListener('DOMContentLoaded', () => {
  const headings = [
      "Website Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Laravel Developer",
  ];
  
  let currentHeadingIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;
  
  const headingElement = document.getElementById('animated-heading');
  
  function type() {
      const currentHeading = headings[currentHeadingIndex];
      
      if (isDeleting) {
          headingElement.textContent = currentHeading.substring(0, currentCharIndex--);
          if (currentCharIndex < 0) {
              isDeleting = false;
              currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
          }
      } else {
          headingElement.textContent = currentHeading.substring(0, currentCharIndex++);
          if (currentCharIndex > currentHeading.length) {
              isDeleting = true;
              setTimeout(type, pauseTime);
              return;
          }
      }
      
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
  
  type();
});



/**
 * Hero Counter Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-div h3');
  const duration = 2000;
  const frameDuration = 1000 / 60;

  // Dynamically set target numbers
  const targetNumbers = [10, 22, 7, 220];

  counters.forEach((counter, index) => {
      counter.setAttribute('data-target', targetNumbers[index]);
  });

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / (duration / frameDuration);

          if (count < target) {
              counter.innerText = Math.ceil(count + increment).toString().padStart(2, '0');
              setTimeout(updateCount, frameDuration);
          } else {
              counter.innerText = target.toString().padStart(2, '0');
          }
      };

      updateCount();
  });
});




/**
 * Why Me Section TabView Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  let whyMeButtons = document.querySelectorAll('.why-me-buttons button');

  let experienceContentSection = document.querySelector('.experience-content');
  let educationContentSection = document.querySelector('.education-content');
  let skillContentSection = document.querySelector('.skill-content');
  let aboutMeContentSection = document.querySelector('.about-me-content');

  // Function to set active styles
  function setActiveStyles(button) {
    button.classList.remove('bg-secondary', 'text-white');
    button.classList.add('bg-primary', 'text-secondary');
  }

  // Function to set inactive styles
  function setInactiveStyles(button) {
    button.classList.remove('bg-primary', 'text-secondary');
    button.classList.add('bg-secondary', 'text-white');
  }

  // Initialize buttons
  whyMeButtons.forEach((button) => {
    if(button.classList.contains('active')) {
      setActiveStyles(button); // Set initial active button styles
    } else {
      setInactiveStyles(button); // Set initial inactive button styles
    }

    // Add click event listener
    button.addEventListener('click', (e) => {
      whyMeButtons.forEach((item) => {
        item.classList.remove('active');
        setInactiveStyles(item);
      });
      e.target.classList.add('active');
      setActiveStyles(e.target);

      // Toggle content visibility
      if(e.target.classList.contains('experience-btn')) {
        experienceContentSection.classList.remove('hidden');
        educationContentSection.classList.add('hidden');
        skillContentSection.classList.add('hidden');
        aboutMeContentSection.classList.add('hidden');
      } else if(e.target.classList.contains('education-btn')) {
        experienceContentSection.classList.add('hidden');
        educationContentSection.classList.remove('hidden');
        skillContentSection.classList.add('hidden');
        aboutMeContentSection.classList.add('hidden');
      } else if(e.target.classList.contains('skills-btn')) {
        experienceContentSection.classList.add('hidden');
        educationContentSection.classList.add('hidden');
        skillContentSection.classList.remove('hidden');
        aboutMeContentSection.classList.add('hidden');
      } else if(e.target.classList.contains('about-me-btn')) {
        experienceContentSection.classList.add('hidden');
        educationContentSection.classList.add('hidden');
        skillContentSection.classList.add('hidden');
        aboutMeContentSection.classList.remove('hidden');
      }
    });
  });


});




/**
 * Completed Project Slider Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.project-slide');
  let currentSlide = 0;

  document.getElementById('next-button').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'grid';
  });

  document.getElementById('prev-button').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'grid';
  });
});




/**
 * Go On Top Button Functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  var goTopButton = document.getElementById('goTopButton');

  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          goTopButton.classList.remove('hidden');
          goTopButton.classList.add('opacity-100');
          goTopButton.classList.remove('opacity-0');
      } else {
          goTopButton.classList.add('hidden');
          goTopButton.classList.remove('opacity-100');
          goTopButton.classList.add('opacity-0');
      }
  };

  goTopButton.addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  });
});  


