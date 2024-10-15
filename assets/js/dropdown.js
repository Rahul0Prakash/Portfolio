
// Select hamburger and dropdown menu elements
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');

// Function to toggle dropdown on hamburger click
hamburger.addEventListener('click', function(event) {
    // Toggle 'open' class to animate hamburger and 'expand' to show/hide dropdown
    hamburger.classList.toggle('open');
    dropdownMenu.classList.toggle('expand');
    
    // Prevent the click from bubbling up to the window and causing unwanted closing
    event.stopPropagation();
});

// Function to close dropdown on click outside or scroll event
function handleCloseDropdown(event) {
    // Check if dropdown is currently open
    if (dropdownMenu.classList.contains('expand')) {
        // Check if the click is outside of the dropdown and hamburger
        if (!dropdownMenu.contains(event.target) && !hamburger.contains(event.target)) {
            // Remove 'open' and 'expand' classes to close dropdown
            dropdownMenu.classList.remove('expand');
            hamburger.classList.remove('open');
        }
    }
}

// Attach the event listener to the window for clicks
window.addEventListener('click', handleCloseDropdown);

// Attach the event listener to the window for scrolls
window.addEventListener('scroll', handleCloseDropdown);
