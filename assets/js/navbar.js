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
  document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the home page by verifying the existence of #about and #work sections
    const aboutSection = document.getElementById('about');
    const workSection = document.getElementById('work');
  
    const aboutLink = document.querySelector('a[href="#about"]');
    const workLink = document.querySelector('a[href="#work"]');
  
    if (aboutLink) {
      aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (aboutSection) {
          // Scroll directly to the #about section on the home page
          scrollToSectionWithOffset('#about');
        } else {
          // Navigate to the home page and scroll to the #about section
          window.location.href = 'https://www.youxrahul.work/#about';
        }
      });
    }
  
    if (workLink) {
      workLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (workSection) {
          // Scroll directly to the #work section on the home page
          scrollToSectionWithOffset('#work');
        } else {
          // Navigate to the home page and scroll to the #work section
          window.location.href = 'https://www.youxrahul.work/#work';
        }
      });
    }
  });
  // Event listener for scrolling to manage the arrow's visibility

});