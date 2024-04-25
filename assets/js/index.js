// handle sidebar visibility
const toggleContainer = document.getElementById("mobile-menu-toggle");
const sidebarContainer = document.getElementById("sidebar-container");

document.getElementById("open-sidebar-icon").addEventListener('click', () => {
  toggleContainer.classList.add("active");
  sidebarContainer.classList.add("active");
});

document.getElementById("close-sidebar-icon").addEventListener('click', () => {
  toggleContainer.classList.remove("active");
  sidebarContainer.classList.remove("active");
});

const linksItems = document.getElementsByClassName('link-item');

for (let index = 0; index < linksItems.length; index++) {
  linksItems[index].addEventListener('click', () => {
    toggleContainer.classList.remove("active");
    sidebarContainer.classList.remove("active");
  });
}

// typed js - typing animation
var typed = new Typed('#persona-name', {
  strings: ["I'M MANISHA <span style='color: red;'>BATESAR<span>"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
  backDelay: 2000,
});


