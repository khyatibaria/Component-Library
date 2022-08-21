let head = document.querySelector(".hero-subhead");
const menuOpen = document.querySelector("#menuOpen");
const menuClose = document.querySelector("#menuClose");
const sideBar = document.querySelector(".sidebar");

let i = 0;
let speed = 50;
let text = "Build Clean, Modern UI Interfaces";

window.addEventListener("load", typeWriter);

function typeWriter() {
  if (i < text.length) {
    head.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const openSideBar = () => {
  sideBar.classList.add("visibility");
};

const closeSideBar = () => {
  sideBar.classList.remove("visibility");
};

menuOpen.addEventListener("click", openSideBar);

menuClose.addEventListener("click", closeSideBar);
