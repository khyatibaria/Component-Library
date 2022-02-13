const modal = document.querySelector('#modalCloseble');
const modalBtn = document.querySelector('#modalBtn');
const modalCloseBtn = document.querySelector('#modalCloseBtn');
const closeIconBtn = document.querySelector('#iconClose');

modalBtn.addEventListener('click', () => {
  console.log('hey');
  modal.show();
});

modalCloseBtn.addEventListener('click', () => {
  modal.close();
});

closeIconBtn.addEventListener('click', () => {
  modal.close();
});
