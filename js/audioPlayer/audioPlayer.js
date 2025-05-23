var audio = document.getElementById("song");
audio.volume = 1;

function play() {
  var audio = document.getElementById("song");
  audio.play();
}

function pause() {
  var audio = document.getElementById("song");
  audio.pause();
}

function stop() {
  var audio = document.getElementById("song");
  audio.pause();
  audio.currentTime = 0;
}
window.onscroll = function () {
  var audio = document.getElementById("song");
  setTimeout(function () {
    audio.play();
  }, 200000);
};
