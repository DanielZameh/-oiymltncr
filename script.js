// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});
// Get the navigation menu
const navMenu = document.querySelector('.nav-menu');

// Get the hamburger menu button
const hamburger = document.querySelector('.hamburger');

// Get the close button
const close = document.querySelector('.close');

// Get the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger menu button click event
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close button click event
close.addEventListener('click', () => {
  navMenu.classList.remove('show');
  hamburger.classList.remove('active');
});

// Nav links click event
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    hamburger.classList.remove('active');
  });
});

// Window resize event to close the nav menu on larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('show');
    hamburger.classList.remove('active');
  }
});
