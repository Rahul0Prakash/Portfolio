// Function to handle smooth scrolling to a section, with offset
function scrollToSectionWithOffset(sectionId) {
  const section = document.querySelector(sectionId);
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const viewportHeight = window.innerHeight;

  // Convert the rem offset to pixels (assuming 1rem = 16px)
  const offsetInPixels = 8 * 16;

  // Calculate the final position by subtracting the offset
  const offset = sectionTop - offsetInPixels;


  // Scroll to the calculated position
  window.scrollTo({
    top: offset ,
    behavior: 'smooth'
  });
  console.log(offset);
}


document.addEventListener('DOMContentLoaded', function () {

  const navbar = document.querySelector('nav');

  let lastScrollTop = 0; // Tracks the last known scroll position


  window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '4rem';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  // Select the nav links and logo
  const navLinks = document.querySelectorAll('.nav-links a');
  const logo = document.querySelector('.logo');

  // Handle active class assignment to nav links
  function handleActiveClass(clickedElement) {
    // Remove active class from all nav links
    navLinks.forEach(item => item.classList.remove('active')); 
    // Add active class to the clicked nav link
    clickedElement.classList.add('active');
  }

  // Add click event listener to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      handleActiveClass(this); // Apply active class to clicked link
    });
  });

  // Add functionality for the logo (navigate to homepage and reset nav items)
  logo.addEventListener('click', function() {
    // Scroll smoothly to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Remove active state from all nav links
    navLinks.forEach(item => item.classList.remove('active'));
  });

  // Select the "About Me" and "Work" links

  // Add click event listeners for the "About Me" and "Work" links
  document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSectionWithOffset('#about');
  });

  document.querySelector('a[href="#work"]').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSectionWithOffset('#work');
  });

  // Event listener for scrolling to manage the arrow's visibility

  window.addEventListener('load', function() {
    // Elements selection
    const scrollUpButton = document.getElementById('scrollUpButton');
    const downwardArrow = document.getElementById('scrollDownArrow');


    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Logic for scroll-up button
      if (scrollPosition > 500) {
        scrollUpButton.classList.add('show');
        scrollUpButton.classList.remove('hide');
      } else {
        scrollUpButton.classList.add('hide');
        scrollUpButton.classList.remove('show');
      }

      // Logic for downward arrow at bottom of landing page
      if (scrollPosition > 75) {
        // Hide the arrow if scrolled more than 75px
        downwardArrow.style.opacity = '0';
        downwardArrow.style.pointerEvents = 'none'; // Prevent interaction when invisible
      } else {
        // Show the arrow if scrolled between 0 and 75px
        downwardArrow.style.opacity = '1';
        downwardArrow.style.pointerEvents = 'auto'; // Allow interaction when visible
      }
    });

    // Click event to scroll to the top of the page
    scrollUpButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});