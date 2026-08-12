let navLinks = document.querySelector(" .nav-menu .nav-link");
let menuOpenButton = document . querySelector("#menu-open-button");
let menuCloseButton = document . querySelector("#menu-close-button");
 menuOpenButton.addEventListener("click" ,() =>{
   // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
 });
   //close menu when the close button is click
menuCloseButton.addEventListener("click" , () => menuOpenButton.click());

navLinks.foreach(link =>{
  link.addEventListener("click", () => menuOpenButton.click())
});
/*
let menuToggle = document.getElementById("menuToggle");
let navMenu = document.getElementById("navMenu");
    menuToggle.addEventListener("click" , ()=>{
      navMenu.classList.toggle("active");
    });
