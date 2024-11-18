document.addEventListener('DOMContentLoaded', function () {
  


  window.addEventListener('load', function() {
    // Elements selection
    const scrollUpButton = document.getElementById('scrollUpButton');
    const downwardArrow = document.getElementById('scrollDownArrow');
    const backButton = document.getElementById('backButton');


    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Logic for scroll-up button
      if (scrollPosition > 500) {
        scrollUpButton.classList.add('show');
        scrollUpButton.classList.remove('hide');
        // backButton.classList.add('hide');
        // backButton.classList.remove('show');
      } else {
        scrollUpButton.classList.add('hide');
        scrollUpButton.classList.remove('show');
        // backButton.classList.add('show');
        // backButton.classList.remove('hide');
      }

      if (downwardArrow) {
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

        
        