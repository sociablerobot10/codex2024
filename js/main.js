let firstCard = document.querySelector(".card-appear");
let secondCard = document.querySelector(".card-invite");
let openBtn = document.querySelector(".open-btn");
openBtn.addEventListener("click", () => {
  firstCard.classList.add("fade-out");
  setTimeout(function () {
    firstCard.classList.add('animate__animated', 'animate__heartBeat','animate__zoomOut');
   
    
    // firstCard.classList.add("card-disappear");
    setTimeout(function(){
      firstCard.className = 'card-disappear';
  }, 500);
  
  setTimeout(function(){
    /** get second card to pulse or do something when it shows up */
    secondCard.classList.add('animate__zoomInLeft')
    secondCard.classList.remove('card-disappear')
   
}, 500);
  });
});
