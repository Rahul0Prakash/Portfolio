window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none'; // Or preloader.remove();
      });
      
      window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = 'opacity 0.5s ease-out';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 350); // Ensure transition completes before display is set to none
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
      
      
      