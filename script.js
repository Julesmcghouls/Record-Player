let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
  if (!state) {
    // Start horse animation
    createHorses();

    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    // Stop horse animation by removing all horse elements
    document.querySelectorAll(".horse-container").forEach(horse => horse.remove());

    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});


function createHorses() {
  const numHorses = 500; // Number of horses to display
  for (let i = 0; i < numHorses; i++) {
    let horseContainer = document.createElement("div");
    horseContainer.classList.add("horse-container");

    // Alternate directions for each horse
    horseContainer.style.animationDirection = i % 2 === 0 ? "normal" : "reverse";

    // Randomize horizontal starting position for each horse
    horseContainer.style.left = `${Math.random() * 100}vw`; // Position between 0% and 100% of the viewport width

    // Randomize vertical starting position for each horse
    horseContainer.style.top = `${Math.random() * 100}vh`; // Position between 0% and 100% of the viewport height

    // Randomize animation duration for each horse
    horseContainer.style.animationDuration = `${Math.random() * 5 + 5}s`;

    // Randomize animation delay for each horse
    horseContainer.style.animationDelay = `${Math.random() * 5}s`;

    let horse = document.createElement("div");
    horse.classList.add("horse");

    horseContainer.appendChild(horse);
    document.body.appendChild(horseContainer);
  }
}
