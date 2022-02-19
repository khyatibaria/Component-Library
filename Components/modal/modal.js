const modal = document.querySelector('#modalCloseble');
const btn = document.querySelector('#modalOpenBtn');
const modalBtn = document.querySelector('#modalBtn');
const closeIconBtn = document.querySelector('#iconClose');

btn.addEventListener('click', () => {
  modal.show();
});

modalBtn.addEventListener('click', () => {
  modal.close();
});

closeIconBtn.addEventListener('click', () => {
    console.log("close")
  modal.close();
});
