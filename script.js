// Add click event listeners to the navbar links
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Scroll to the corresponding section of the page
    const sectionId = event.target.getAttribute('href').slice(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});