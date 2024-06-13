const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href').slice(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

