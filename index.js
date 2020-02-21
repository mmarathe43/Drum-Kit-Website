function playSound(key){
  switch (key) {
  case "w":
    var audio = new Audio('sounds/crash.mp3');
    break;
  case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      break;
  case "s":
        var audio = new Audio('sounds/snare.mp3');
        break;
  case "d":
          var audio = new Audio('sounds/tom-1.mp3');
          break;
  case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            break;
  case "k":
              var audio = new Audio('sounds/tom-3.mp3');
              break;
  case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                break;

  default:

}
audio.play();
}

function Buttonanimation(pressedkey){
  var activebtn=document.querySelector("."+pressedkey);
  activebtn.classList.add("pressed");
  setTimeout(function(){
    activebtn.classList.remove("pressed");
  },100);
}


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
  playSound(this.innerHTML);
  Buttonanimation(this.innerHTML);
})
}

document.addEventListener("keydown",function(event){
  playSound(event.key);
  Buttonanimation(event.key);
})
