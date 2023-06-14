let button_colors=["red", "blue", "green", "yellow"];
let user_input=[];
let pattern_sequence=[];
let level=0;
let press_first=false;
let soundpath_wrong="./sounds/Rick_Roll.mp3";
let sound_wrong=new Audio(soundpath_wrong);
$(document).on("keydown",function(){
    if(!press_first){
        press_first=true;
        $("#level-title").text("Level "+level);
        sound_wrong.pause();
        sound_wrong=new Audio(soundpath_wrong);
        generate_sequence();
    }
});
function generate_sequence(){
    user_input=[];
    $("#level-title").text("Level "+level);
    let rnumber=Math.floor(Math.random()*4);
    let chose_color=button_colors[rnumber];
    pattern_sequence.push(chose_color);
    play_sound(chose_color);
    level++;
}
function checkAnswer(currentLevel) {

    if (pattern_sequence[currentLevel] === user_input[currentLevel]) {
      if (user_input.length === pattern_sequence.length){
        setTimeout(function () {
          generate_sequence();
        }, 1000);
      }
    } else {
        sound_wrong.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        Restart();
    }
}

function play_sound(chose_color){
    let soundpath6="./sounds/"+chose_color+".mp3";
    let sound=new Audio(soundpath6);
    $("#"+chose_color).fadeOut(100).fadeIn(100)
    sound.play();
}
function button_animation(s){
    $("#"+s).addClass("pressed");
    setTimeout(function(){
        $("#"+s).removeClass("pressed");
    },100);
}
$(".btn").click(function(){
    user_input.push(this.id);
    button_animation(this.id);
    play_sound(this.id);
    checkAnswer(user_input.length-1);
});
function Restart() {
    level = 0;
    pattern_sequence = [];
    press_first = false;
  }