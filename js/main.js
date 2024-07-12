let firstCard = document.querySelector(".card-appear");
let secondCard = document.querySelector(".card-invite");
let openBtn = document.querySelector(".open-btn");
openBtn.addEventListener("click", () => {
  firstCard.classList.add("fade-out");
  setTimeout(function () {
    firstCard.classList.add("card-disappear");
    secondCard.classList.remove("card-disappear");
  });
});
