// slide elements

const imageBox = document.querySelector('.image-box')
const aboutBox = document.querySelector('.about-box')

const items = [...document.querySelectorAll(".item-content")]

document.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  items.forEach((item) => {
    const itemTop = item.offsetTop;
    const itemBottom = itemTop + item.clientHeight;

    if (scrollPosition + windowHeight >= itemBottom) {
      if(item.hasAttribute('class', 'left')) {
        item.classList.remove("left")
      }

      if(item.hasAttribute('class', 'right')) {
        item.classList.remove("right")
      };
    }
  });
})