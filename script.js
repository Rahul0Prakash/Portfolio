const navbar = document.getElementById('navbar');

let lastScrollTop = 0; // Tracks the last scroll position

window.addEventListener('scroll', function() {
    // Get the current scroll position using document.documentElement.scrollTop
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // User is scrolling down - hide the navbar
        navbar.style.top = '-100px'; // Move the navbar up out of view
    } else {
        // User is scrolling up - show the navbar
        navbar.style.top = '4rem'; // Bring the navbar back into view
    }

    // Update the last scroll position to the current position
    lastScrollTop = Math.max(currentScroll, 0); // Ensure we don't end up with negative values
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
const aboutMeLink = document.querySelector('a[href="#about"]');
const workLink = document.querySelector('a[href="#work"]');

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

// Add click event listeners for the "About Me" and "Work" links
aboutMeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  scrollToSectionWithOffset('#about');
});

workLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  scrollToSectionWithOffset('#work');
});

// Float image link to external page
const float_img = document.getElementById('float-container');
float_img.addEventListener('click', function() {
  window.open('https://linktr.ee/Rahul_Prakash', '_blank');
});


