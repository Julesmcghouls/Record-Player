let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");
let horseContainer = document.querySelector(".horse-container");

btn.addEventListener("click", () => {
  if (state == false) {
    // Show and move the horse to a random location
    horseContainer.style.display = "block";
    moveHorseRandomly();
    
    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    // Hide the horse
    horseContainer.style.display = "none";
    
    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

// Update volume with the slider
slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});

// Function to move the horse to a random spot on the screen
function moveHorseRandomly() {
  let maxX = window.innerWidth - horseContainer.offsetWidth;
  let maxY = window.innerHeight - horseContainer.offsetHeight;
  
  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);
  
  horseContainer.style.left = `${randomX}px`;
  horseContainer.style.top = `${randomY}px`;
}
