window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
 
 
  // Set transition styles for fade-out effect
  preloader.style.transition = 'opacity 0.5s ease-out';

  // Trigger fade-out by changing the opacity to 0 after the page loads
  preloader.style.opacity = '0';

  // After the transition ends (500ms), set display to 'none' to remove it from the layout
  setTimeout(function() {
    preloader.style.display = 'none';
  }, 500); // Set timeout equal to the transition duration (500ms)

  // Set a maximum timeout of 3 seconds to definitely remove the preloader
  setTimeout(function() {
    if (preloader.style.display !== 'none') {
      preloader.style.opacity = '0'; // Ensure opacity is 0
      preloader.style.display = 'none'; // Remove it from the layout
    }
  }, 5000); // Maximum timeout of 3 seconds
  window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function () {
  
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

  const easingChildren = document.querySelectorAll('.easing-container > *');

    // Set up the Intersection Observer
    const observerOptions = {
        threshold: 0.15 // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the element comes into view
                entry.target.classList.add('visible');
                // Optional: Unobserve the element after it comes into view
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each child element
    easingChildren.forEach(child => {
        observer.observe(child);
    });

});

        
        