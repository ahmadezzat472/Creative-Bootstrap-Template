// start nav
let navItem = document.querySelector(".nav");
console.log(navItem)

window.onscroll = function () {
    if (scrollY >= 20) {
        navItem.classList.add("navColor");
    } else {
        navItem.classList.remove("navColor");
    }
  };