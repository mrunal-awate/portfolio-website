
// Form Validation
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      e.preventDefault();
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
    }
  });
  
  // Fade-in Animation
  window.addEventListener('load', function () {
    document.querySelector('.fade-in')?.classList.add('visible');
  });
  