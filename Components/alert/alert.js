const alert = document.querySelectorAll(".alert-closeble");
const alertCloseBtn = document.querySelectorAll(".alert-close");
for (let i = 0; i <= alert.length; i++) {
  alertCloseBtn[i].addEventListener("click", () => {
    alert[i].style.display = "none";
  });
}
