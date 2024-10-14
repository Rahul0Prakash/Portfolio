

window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none'; // Or preloader.remove();
});
// Select the navbar element
window.addEventListener('scroll', function() {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;
  console.log("Current Scroll:", currentScroll);
});
const navbar = document.querySelector('nav');

let lastScrollTop = 0; // Tracks the last known scroll position


window.addEventListener('scroll', function() {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;
  console.log("Current Scroll:", currentScroll);
  console.log("Last Scroll:", lastScrollTop);

  if (currentScroll > lastScrollTop) {
      console.log("Scrolling Down: Hiding Navbar");
      navbar.style.top = '-100px';
  } else {
      console.log("Scrolling Up: Showing Navbar");
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

// Float image link to external page
const float_img = document.getElementById('float-container');
float_img.addEventListener('click', function() {
  window.open('https://linktr.ee/Rahul_Prakash', '_blank');
});

document.querySelectorAll('.social-img').forEach((img) => {
  img.addEventListener('click', function() {
    const url = img.getAttribute('data-href');
    if (url) {
      window.open(url, '_blank'); // Open the link in a new tab
    }
  });
});

window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.visibility = 'hidden';
  preloader.style.transition = 'opacity 0.5s ease-out';
  setTimeout(function() {
      preloader.style.display = 'none';
  }, 400); // Ensure transition completes before display is set to none
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open-nav');
});


