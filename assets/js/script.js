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

        
        