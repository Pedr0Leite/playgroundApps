//Circules
const circule_one = document.getElementById("circule_one");
const circule_two = document.getElementById("circule_two");
const circule_three = document.getElementById("circule_three");
const circule_four = document.getElementById("circule_four");
const circule_five = document.getElementById("circule_five");
const circule_six = document.getElementById("circule_six");

//Audio
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");


let circules = [  circule_one,
    circule_two,
    circule_three,
    circule_four,
    circule_five,
    circule_six];

circules.forEach(x =>
    $(x).click(function () {
    var $this = $(this);
    let rotating = ["rotate_one","rotate_two"];
    let randomIndexRotating = Math.floor(Math.random() * rotating.length);
    let randomRotatingClass = rotating[randomIndexRotating];

    let case2 = $this.hasClass("rotate_one");
    let case3 = $this.hasClass("rotate_two");

    let yesAndyes = (case2 == true && case3 == true);
    let yesAndno = (case2 == true && case3 == false);
    let noAndyes = (case2 == false && case3 == true);
    let noAndno = (case2 == false && case3 == false);

    if(noAndno == true){
        $this.addClass(randomRotatingClass);
    }else if(yesAndyes == true){
        $this.removeClass();
    }else if(yesAndno == true){
        $this.removeClass();
    }else if(noAndyes == true){
        $this.removeClass();
    }
})
);


function myAudioFunction(audio) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

myAudioFunction(audio1);
myAudioFunction(audio2);
myAudioFunction(audio3);
myAudioFunction(audio4);
myAudioFunction(audio5);
myAudioFunction(audio6);


//If music starts playing alone use this:
// $(document).ready(function () {
//     document.getElementById("audio1").pause();
//     document.getElementById("audio2").pause();
//     document.getElementById("audio3").pause();
//     document.getElementById("audio4").pause();
//     document.getElementById("audio5").pause();
//     document.getElementById("audio6").pause();
//   });