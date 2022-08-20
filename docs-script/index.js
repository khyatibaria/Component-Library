let head = document.querySelector(".hero-subhead");
const menu = document.querySelector("#menuBtn");
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
  console.log("hehehe");
  sideBar.classList.toggle("visibility");
};

menu.addEventListener("click", openSideBar);
