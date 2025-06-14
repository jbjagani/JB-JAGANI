// Optional future interaction scripts
console.log("JB Jagani Portfolio Loaded.");
// Script to control background music
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", () => {
  bgMusic.play();
});

pauseBtn.addEventListener("click", () => {
  bgMusic.pause();
});
