/* variables */
let firstCard = document.querySelector(".card-appear");
let secondCard = document.querySelector(".card-invite");
let aboutCard = document.querySelector(".about-cont");
let mapCard = document.querySelector(".map-cont");
let socialsCard = document.querySelector(".socials");
let openBtn = document.querySelector(".open-btn");
let moreBtn = document.querySelector(".more-btn");
let mapBtn = document.querySelector(".map-btn");
let socialsBtn = document.querySelector(".socials-btn");

// animate card leaving and back card entering on click
openBtn.addEventListener("click", () => {
  firstCard.classList.add("fade-out");
  setTimeout(function () {
    firstCard.classList.add(
      "animate__animated",
      "animate__heartBeat",
      "animate__zoomOut"
    );

    // less aburpt exit
    setTimeout(function () {
      firstCard.className = "card-disappear";
    }, 500);
    // Delay second card arrival
    setTimeout(function () {
      secondCard.classList.add("animate__zoomInLeft");
      secondCard.classList.remove("card-disappear");
    }, 500);
  });
});

// about section will will slide in on click
moreBtn.addEventListener("click", () => {
  aboutCard.classList.remove("card-disappear");
  aboutCard.scrollIntoView({ behavior: "smooth" });
  aboutCard.classList.add("animate__animated", "animate__slideInLeft");
});
// map section will will slide in on click
mapBtn.addEventListener("click", () => {
  mapCard.classList.remove("card-disappear");
  mapCard.scrollIntoView({ behavior: "smooth" });
  mapCard.classList.add("animate__animated", "animate__slideInLeft");
});

/* Share with your friends functionality */
socialsBtn.addEventListener("click", () => {
  socialsCard.classList.remove("card-disappear");
});
