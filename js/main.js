let firstCard = document.querySelector(".card-appear");
let secondCard = document.querySelector(".card-invite");
let aboutCard = document.querySelector(".about-cont");
let mapCard = document.querySelector(".map-cont");
let openBtn = document.querySelector(".open-btn");
let moreBtn = document.querySelector(".more-btn");
let mapBtn = document.querySelector(".map-btn");

openBtn.addEventListener("click", () => {
  firstCard.classList.add("fade-out");
  setTimeout(function () {
    firstCard.classList.add(
      "animate__animated",
      "animate__heartBeat",
      "animate__zoomOut"
    );

    // firstCard.classList.add("card-disappear");
    setTimeout(function () {
      firstCard.className = "card-disappear";
    }, 500);

    setTimeout(function () {
      /** get second card to pulse or do something when it shows up */
      secondCard.classList.add("animate__zoomInLeft");
      secondCard.classList.remove("card-disappear");
    }, 500);
  });
});

moreBtn.addEventListener("click", () => {
  aboutCard.classList.remove("card-disappear");
  aboutCard.scrollIntoView({ behavior: "smooth" });
  aboutCard.classList.add("animate__animated", "animate__slideInLeft");
});

mapBtn.addEventListener("click", () => {
  mapCard.classList.remove("card-disappear");
  mapCard.scrollIntoView({ behavior: "smooth" });
  mapCard.classList.add("animate__animated", "animate__slideInLeft");
  // aboutCard.classList.add("animate__animated", "animate__backInUp");
});
