const music = new Audio('./GooiMielies.mp3');

function start() {
  music.play();
  music.volume = .5;
  music.loop = true;
  document.getElementById("start").style.display = "none";
  document.getElementById("mielies").style.display = "block";
}
