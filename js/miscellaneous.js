const playBtn = document.querySelector('.audio-container .button:nth-child(2)');
const pauseBtn = document.querySelector('.audio-container .button:nth-child(3)');
const fForwardBtn = document.querySelector('.audio-container .button:nth-child(4)');
const stopBtn = document.querySelector('.audio-container .button:last-child');
const diskImage = document.querySelector('.audio-container figure img');
const audio = new Audio('../audio/Someone You Loved.mp3');
const stopAudio = new Audio('../audio/stop.mp3');
const playBtns=document.querySelectorAll('.fa-play-circle');

playBtns.forEach((btn)=>{
  
  btn.addEventListener('click', playSong);
});

function playSong(event){
  
  const song=(event.target.parentNode.parentNode.firstElementChild.innerText).toLowerCase()+'.mp3';
  if(song!=='song name.mp3'){
    audio.src=`../audio/${song}`;
    diskImage.classList.add('animate');
    diskImage.classList.remove('pause');
    audio.play();
  }
}

playBtn.addEventListener('click', () => {
  
  diskImage.classList.add('animate');
  diskImage.classList.remove('pause');
  audio.play();
  
});

pauseBtn.addEventListener('click', () => {
  
  audio.pause();
  diskImage.classList.add('pause');
  
});
fForwardBtn.addEventListener('click', ()=>{
  
  if(audio.playbackRate!==2.0){
    audio.playbackRate=2.0;
    diskImage.style.animationDuration= '1s';
  }else{
    
    normalPlayBack();
  }
  
});

function normalPlayBack(){
  audio.playbackRate=1.0;
  diskImage.style.animationDuration= '2s';
}
stopBtn.addEventListener('click', () => {
  
  audio.pause();
  audio.currentTime = 0.00;  
  normalPlayBack()
  diskImage.classList.remove('animate');
  diskImage.classList.remove('pause');
  
});

audio.addEventListener('ended', () => {
  
  diskImage.classList.remove('animate');
  diskImage.classList.remove('pause');
  
});

diskImage.addEventListener('animationend',()=>{
  stopAudio.play();
});