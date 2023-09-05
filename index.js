// Работа кнопки бургер-меню
document.addEventListener("DOMContentLoaded", function () {
   const header = document.querySelector(".header");
   const burger = document.getElementById("burger");

   burger.addEventListener("click", function () {
       if (header.classList.contains("open")) {
           header.classList.remove("open");
           header.classList.add("close");
       } else {
           header.classList.remove("close");
           header.classList.add("open");
       }
   });

   // Закрытие меню при клике вне поля меню
   document.addEventListener("click", function (event) {
       const target = event.target;
       if (!burger.contains(target)) {
           header.classList.remove("open");
           header.classList.add("close");
       }
   });
});