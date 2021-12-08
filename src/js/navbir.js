const navSlide = () => {
  const burger = document.querySelector(".burger");
  const burgerClose = document.querySelector(".burger-close");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  const overlay = document.querySelector(".offcanvas-overly");

  console.log(navLinks);

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
    });

    overlay.classList.toggle("active")

    // burger.classList.toggle('times')
  });

  burgerClose.addEventListener("click", () => {      
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
    link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
    });
    
    overlay.classList.toggle("active")

  } )

};

navSlide();
