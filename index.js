let head = document.querySelector('.hero-subhead');

let i = 0;
let speed = 50;
let text = 'Build Clean, Modern UI Interfaces';

window.addEventListener('load', typeWriter);

function typeWriter() {
  if (i < text.length) {
    head.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
