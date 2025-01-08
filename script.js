const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function showSection() {
  //get current section
  const hash = window.location.hash.substring(1); 

  //hide all sections and active links
  sections.forEach(section => {
    section.classList.remove("visible");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
  });

  //add .active and .visible if it matches the page hash
  const targetSection = document.getElementById(hash);
  if (targetSection) {
    targetSection.classList.add("visible");
    const activeLink = document.querySelector(`nav a[href="#${hash}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
    
  //or by default just show home
  } else {
    document.getElementById("home").classList.add("visible");
        const homeLink = document.querySelector(`nav a[href="#home"]`);
        if (homeLink) {
          homeLink.classList.add("active");
        }
  }
}

window.addEventListener("hashchange", showSection);
showSection();