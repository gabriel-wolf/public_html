window.addEventListener("load", () => {
    const bar = document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
      bar.forEach((item, j) => {
        // Random move
        item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.2}s`; // Change the numbers for speed / ( max - min ) + min / ex. ( 0.5 - 0.1 ) + 0.1
      });
    }
  });
  

const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const goodButton = document.getElementById("good");
const audio = document.getElementById("myAudio");
const soundWave = document.querySelector(".sound-wave");

playButton.addEventListener("click", () => {
    audio.play();
    soundWave.style.display = "flex";



    playButton.style.display = "none";
    pauseButton.style.display = "block";
    goodButton.style.display = "block";

    // soundWave.style.visibility = "visible"; 
});

pauseButton.addEventListener("click", () => {
    audio.pause();
    soundWave.style.display = "none";
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    goodButton.style.display = "none";

    // soundWave.style.visibility = "hidden"; 
});

