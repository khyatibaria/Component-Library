const openBtn = document.querySelector('#toast-demoBtn');
const openToast = document.querySelector('#toast-closeable');

openBtn.addEventListener('click', () => {
  openToast.classList.remove('visibility');
  setTimeout(closeToast, 2000);
});

function closeToast() {
  openToast.classList.add('visibility');
}
