
let navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navbar
        navbar.classList.add('hidden');
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll;
});
// Select the nav links (exclude the logo)
const navLinks = document.querySelectorAll('.nav-links a');

// Select the logo separately
const logo = document.querySelector('.logo');

// Create a function to handle the 'active' class
function handleActiveClass(clickedElement) {
  // Remove 'active' class from all nav links
  navLinks.forEach(item => item.classList.remove('active'));
  
  // Add 'active' class to the clicked nav link
  clickedElement.classList.add('active');
}

// Add click event listener to nav links (logo not included)
navLinks.forEach(link => {
  link.addEventListener('click', function() {
      handleActiveClass(this); // Call the function with the clicked link
  });
});

// Optional: If you still want the logo to do something (e.g., navigate home),
// you can add a separate event listener for it, but it won't change the active state.
logo.addEventListener('click', function() {
  // Perform any action here, but don't apply 'active' class
  window.location.href = 'index.html#';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  navLinks.forEach(item => item.classList.remove('active'));
});
