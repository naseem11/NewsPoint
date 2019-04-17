const playBtn=document.querySelector('.audio-container .button:nth-child(2)');
const pauseBtn=document.querySelector('.audio-container .button:last-child');
const diskImage=document.querySelector('.audio-container figure img');
console.log(diskImage);
const audio=new Audio('../audio/Someone You Loved.mp3');

playBtn.addEventListener('click',()=>{
    
    diskImage.classList.add('animate');
    diskImage.classList.remove('pause');
    audio.play();

});

pauseBtn.addEventListener('click',()=>{

  audio.pause();  
  diskImage.classList.add('pause');

});