// hamburger-menu

// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const bigMenu = document.querySelector(".menu-box");
// const bar1 = document.querySelector("#one");
// const bar2 = document.querySelector("#two");
// const bar3 = document.querySelector("#three");
// hamburgerMenu.addEventListener("click", () => {
//   bigMenu.classList.toggle("visible");
//   bar1.classList.toggle("one");
//   bar2.classList.toggle("two");
//   bar3.classList.toggle("three");
//   })
// hamburgerMenu.addEventListener("mouseover", () => {
//   const bar = document.querySelectorAll(".hamburger-bar");
//   for (let bars of bar) {
//   bars.classList.add("color");}
// })
// hamburgerMenu.addEventListener("mouseout", () => {
//   const bar = document.querySelectorAll(".hamburger-bar");
//   for (let bars of bar) {
//   bars.classList.remove("color");}
// })

// slide elements

const imageBox = document.querySelector('.image-box')
const aboutBox = document.querySelector('.about-box')

const items = [...document.querySelectorAll(".item-content")]

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition)

  if (window.innerWidth > 800 && scrollPosition < imageBox.clientHeight) { // ok
    items[0].classList.remove("left")
  } 
  else if (scrollPosition < imageBox.clientHeight + aboutBox.clientHeight) { // ok
    items[1].classList.remove("right")
  }
  else if (scrollPosition < imageBox.clientHeight + aboutBox.clientHeight + items[0].clientHeight + items[1].clientHeight) { // ok
    items[2].classList.remove("left")
  }
  else if (scrollPosition < imageBox.clientHeight + aboutBox.clientHeight + items[0].clientHeight + items[1].clientHeight + items[2].clientHeight) {
    items[3].classList.remove("right")
  }
  else if (scrollPosition < imageBox.clientHeight + aboutBox.clientHeight + items[0].clientHeight + items[1].clientHeight + items[2].clientHeight + items[3].clientHeight) {
    items[4].classList.remove("left")
  }
  else if (scrollPosition < imageBox.clientHeight + aboutBox.clientHeight + items[0].clientHeight + items[1].clientHeight + items[2].clientHeight + items[3].clientHeight + items[4].clientHeight) {
    items[5].classList.remove("right")
  } 

})