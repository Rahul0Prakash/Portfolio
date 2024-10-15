window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');

  // Set transition styles for fade-out effect
  preloader.style.transition = 'opacity 0.5s ease-out';

  // Trigger fade-out by changing the opacity to 0
  preloader.style.opacity = '0';

  // After the transition ends, set display to 'none' to remove it from the layout
  setTimeout(function() {
    preloader.style.display = 'none';
  }, 500); // Set timeout equal to the transition duration (500ms)
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

      
      