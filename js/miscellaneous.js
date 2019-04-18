const playBtn = document.querySelector('.audio-container .button:nth-child(2)');
const pauseBtn = document.querySelector('.audio-container .button:nth-child(3)');
const stopBtn = document.querySelector('.audio-container .button:last-child');
const diskImage = document.querySelector('.audio-container figure img');
const audio = new Audio('../audio/Someone You Loved.mp3');
const stopAudio = new Audio('../audio/stop.mp3');

playBtn.addEventListener('click', () => {

  diskImage.classList.add('animate');
  diskImage.classList.remove('pause');
  audio.play();

});

pauseBtn.addEventListener('click', () => {

  audio.pause();
  diskImage.classList.add('pause');

});
stopBtn.addEventListener('click', () => {

  audio.pause();
  audio.currentTime = 0.00;
  stopAudio.play();
  diskImage.classList.remove('animate');
  diskImage.classList.remove('pause');

});

audio.addEventListener('ended', () => {

  diskImage.classList.remove('animate');
  diskImage.classList.remove('pause');

});