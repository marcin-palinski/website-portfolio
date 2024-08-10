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

const heightImageBox = imageBox.clientHeight
const heightAboutBox = aboutBox.clientHeight

const item1 = document.querySelectorAll(".item-content")[0]
const item2 = document.querySelectorAll(".item-content")[1]
const item3 = document.querySelectorAll(".item-content")[2]
const item4 = document.querySelectorAll(".item-content")[3]
const item5 = document.querySelectorAll(".item-content")[4]
const item6 = document.querySelectorAll(".item-content")[5]


document.addEventListener("scroll", () => {
  const boxHeight = window.scrollY;

  if (boxHeight < heightImageBox) {
    item1.classList.remove("left")
  } 
  else if (boxHeight < heightImageBox + heightAboutBox) {
    item2.classList.remove("right")
  }
  else if (boxHeight < heightImageBox + heightAboutBox + item1.clientHeight) {
    item3.classList.remove("left")
  }
  else if (boxHeight < heightImageBox + heightAboutBox + item1.clientHeight + item2.clientHeight) {
    item4.classList.remove("right")
  }
  else if (boxHeight < heightImageBox + heightAboutBox + item1.clientHeight + item2.clientHeight + item3.clientHeight) {
    item5.classList.remove("left")
  }
  else if (boxHeight < heightImageBox + heightAboutBox + item1.clientHeight + item2.clientHeight + item3.clientHeight + item4.clientHeight) {
    item6.classList.remove("right")
  } 

})