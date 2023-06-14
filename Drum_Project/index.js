var arr=document.querySelectorAll(".drum");
for(var i=0;i<arr.length;i++){
arr[i].addEventListener("click",function(){
    soundplay(this.innerHTML);
    button_animation(this.innerHTML);
});
}
document.addEventListener("keydown",function(event){
    console.log(event.key);
    soundplay(event.key);
    button_animation(event.key);
});
function soundplay(s){
    switch(s){
        case "w":
            var soundpath1="./sounds/crash.mp3";
            var crash=new Audio(soundpath1);
            crash.play();
            break;
        case "a":
            var soundpath2="./sounds/kick-bass.mp3";
            var kick_bass=new Audio(soundpath2);
            kick_bass.play();
            break;
        case "s":
            var soundpath3="./sounds/snare.mp3";
            var snare=new Audio(soundpath3);
            snare.play();
            break;
        case "d":
            var soundpath4="./sounds/tom-1.mp3";
            var tom1=new Audio(soundpath4);
            tom1.play();
            break;
        case "j":   
            var soundpath5="./sounds/tom-2.mp3";
            var tom2=new Audio(soundpath5);
            tom2.play();
            break;
        case "k":
            var soundpath6="./sounds/tom-3.mp3";
            var tom3=new Audio(soundpath6);
            tom3.play();
            break;
        case "l":
            var soundpath7="./sounds/tom-4.mp3";
            var tom4=new Audio(soundpath7);
            tom4.play();
            break;
        default:
            alert("Anomaly detected, Please press correct buttons only!")
    }
}
function button_animation(s){
    var active=document.querySelector("."+s);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}
let isplaying=true;
var song=new Audio('./sounds/Eternal_Youth.mp3');
var random_music=document.querySelector(".random_music");
random_music.addEventListener("click",rmusic);
function rmusic(){
    if (isplaying) {
        song.play();
      } 
    else {
        song.pause();
      }
    if(isplaying)isplaying=false;
    else isplaying=true;
}
