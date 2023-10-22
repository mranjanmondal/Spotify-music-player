console.log("wellcome to spotify");
let songindex = 0;
let audioElement= new Audio("songs/1.mp3");
 let masterplay = document.getElementById('masterplay');
 let myProgressbar = document.getElementById('myProgressbar');
 let gif = document.getElementById('gif');
 let songitem = Array.from(document.getElementsByClassName('songitem'));
 let backward = document.getElementById('backward');
 let forward = document.getElementById('forward');
 let masterclass = document.getElementById('masterclass');
   let songs = [
    {songname:"Mann Jogiya-Arijit Singh", coverspath:"covers/1.jpg",File:"songs/1.mp3"},
    {songname:"Heeriye-Arijit Singh", coverspath:"covers/2.jpg",File:"songs/2.mp3"},
    {songname:"Chaleya-Arijit Singh", coverspath:"covers/3.jpg",File:"songs/3.mp3"},
    {songname:"Kesariya-Arijit Singh", coverspath:"covers/4.jpg",File:"songs/4.mp3"},
    {songname:"Deva Deva-Arijit Singh", coverspath:"covers/5.jpg",File:"songs/5.mp3"},
    {songname:"Tere Hawaale-Arijit Singh", coverspath:"covers/6.jpg",File:"songs/6.mp3"},
    {songname:"Kayi Baar Haiv-Arijit Singh", coverspath:"covers/7.jpg",File:"songs/7.mp3"},
    {songname:"Phir Aur Kya Chahiye-Arijit Singh", coverspath:"covers/8.jpg",File:"songs/8.mp3"},
    {songname:"Samjhawan-Arijit Singh", coverspath:"covers/9.jpg",File:"songs/9.mp3"},
    {songname:"Jo Tum Na Ho-Arijit Singh", coverspath:"covers/10.jpg",File:"songs/10.mp3"}
   ]
   songitem.forEach((element,i)=>{
      element.getElementsByTagName('img')[0].src = songs[i].coverspath;
      element.getElementsByClassName('songsname')[0].innerText = songs[i].songname;
   })

   
   masterplay.addEventListener('click', ()=>{
      if(audioElement.paused || audioElement.currentTime <=0){
         audioElement.play();
         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
         gif.style.opacity =1;
      }else{
         audioElement.pause();
         masterplay.classList.add('fa-circle-play');
         masterplay.classList.remove('fa-circle-pause');
         gif.style.opacity =0;
      }
   })
   audioElement.addEventListener('timeupdate', ()=>{
      progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
      myProgressbar . value= progress;
      
   })
 myProgressbar.addEventListener('change', ()=>{
     audioElement.currentTime = myProgressbar .value * audioElement.duration/100;
      
   })
      const makeAllPlays = ()=>{
         Array.from (document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
         })
      }
     Array.from (document.getElementsByClassName('songitemplay')).forEach((element)=>{
         element.addEventListener('click',(e)=>{
                      makeAllPlays();
                  songindex =parseInt(e.target.id);
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
          audioElement.src = songs[songindex].File;
          masterclass.innerText=songs[songindex].songname;
          audioElement.currentTime = 0;
          audioElement.play();
          gif.style.opacity =1;
          masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
   
                           
         })
       
      })
 
      forward .addEventListener('click' ,()=>{
if(songindex>=9){
   songindex= 0;
}else{
   songindex++;
}
audioElement.src = songs[songindex].File;
masterclass.innerText=songs[songindex].songname;
          audioElement.currentTime = 0;
          audioElement.play();
          gif.style.opacity =1;
          masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
   })

   backward .addEventListener('click' ,()=>{
      if(songindex<=0){
         songindex= 0;
      }else{
         songindex--;
      }
      audioElement.src = songs[songindex].File;
      masterclass.innerText=songs[songindex].songname;
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style.opacity =1;
                masterplay.classList.remove('fa-circle-play');
               masterplay.classList.add('fa-circle-pause');
         })