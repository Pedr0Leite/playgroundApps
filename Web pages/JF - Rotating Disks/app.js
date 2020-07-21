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

let circules = [
  circule_one,
  circule_two,
  circule_three,
  circule_four,
  circule_five,
  circule_six
];

let secretComb1 = false;
let secretComb2 = false;
let secretComb3 = false;
let secretComb4 = false;
let secretComb5 = false;
let secretComb6 = false;

circules.forEach((x) =>
  $(x).click(function () {
    var $this = $(this);
    let rotating = ["rotate_one", "rotate_two"];
    let randomIndexRotating = Math.floor(Math.random() * rotating.length);
    let randomRotatingClass = rotating[randomIndexRotating];

    let case2 = $this.hasClass("rotate_one");
    let case3 = $this.hasClass("rotate_two");

    let yesAndyes = case2 == true && case3 == true;
    let yesAndno = case2 == true && case3 == false;
    let noAndyes = case2 == false && case3 == true;
    let noAndno = case2 == false && case3 == false;

    if (noAndno == true) {
      $this.addClass(randomRotatingClass);
    } else if (yesAndyes == true) {
      $this.removeClass();
    } else if (yesAndno == true) {
      $this.removeClass();
    } else if (noAndyes == true) {
      $this.removeClass();
    }
    //Secret combination for URL
    if (secretComb1 == true && 
      secretComb2 == true && 
      secretComb3 == false && 
      secretComb4 == false && 
      secretComb5 == false &&
      secretComb6 == true
      ) {
      $(location).attr("href", "https://jacquelinefolds.superhi.com/");
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

//audio combination for secret redirection
//audio1 eventLisitener
audio1.addEventListener(
  "playing",
  () => {
    secretComb1 = true;
  },
  false
);

audio1.addEventListener(
  "pause",
  () => {
    secretComb1 = false;
  },
  false
);
//audio2 eventLisitener
audio2.addEventListener(
  "playing",
  () => {
    secretComb2 = true;
  },
  false
);

audio2.addEventListener(
  "pause",
  () => {
    secretComb2 = false;
  },
  false
);
//audio3 eventLisitener
audio3.addEventListener(
  "playing",
  () => {
    secretComb3 = true;
  },
  false
);

audio3.addEventListener(
  "pause",
  () => {
    secretComb3 = false;
  },
  false
);
//audio4 eventLisitener
audio4.addEventListener(
  "playing",
  () => {
    secretComb4 = true;
  },
  false
);

audio4.addEventListener(
  "pause",
  () => {
    secretComb4 = false;
  },
  false
);
//audio5 eventLisitener
audio5.addEventListener(
  "playing",
  () => {
    secretComb5 = true;
  },
  false
);

audio5.addEventListener(
  "pause",
  () => {
    secretComb5 = false;
  },
  false
);
//audio6 eventLisitener
audio6.addEventListener(
  "playing",
  () => {
    secretComb6 = true;
  },
  false
);

audio6.addEventListener(
  "pause",
  () => {
    secretComb6 = false;
  },
  false
);





// console.log("combination: " + combination);
// "mousedown", event => {
//     if (event.button == 0) {
//       console.log("Left button");
//     } else if (event.button == 1) {
//       console.log("Middle button");
//     } else if (event.button == 2) {
//       console.log("Right button");
//     }
//   });

// $( "a.offsite" ).live( "click", function() {
//   alert( "Goodbye!" ); // jQuery 1.3+
// });

// document.addEventListener("playing", function (e) {
//   if (e.target.tagName == "audio1") {
//     alert("BUTTON CLICKED");
//   }
// });

// (function Secret() {
//   if (audio1.play() == true) {
//     console.log("Secret!");
//   }
// })();

// //Hyperdrive
var Stars = function (args) {
  if (args === undefined) args = {};
  var _scope = this;

  this.stars = [];
  this.vel = args.vel || 1;
  this.radius = args.radius || 1;
  this.alpha = 0.5;
  this.starsCounter = args.stars || 300;
  var center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
  var canvas, context;
  this.init = function () {
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    context = canvas.getContext("2d");
    context.lineCap = "round";
    this.start();
    this.resize();
    //
    window.addEventListener("resize", this.resize.bind(this));
  };

  this.start = function () {
    this.stars = [];
    for (var i = 0; i < this.starsCounter; i++) {
      setTimeout(function () {
        _scope.stars.push(new Star());
      }, i * 30);
    }
  };

  this.resize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center.x = canvas.width / 2;
    center.y = canvas.height / 2;
  };

  this.animate = function () {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
  };
  this.render = function () {
    context.fillStyle = "rgba(1, 4, 35, 0.8)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "white";
    for (var i = 0; i < this.stars.length; i++) this.stars[i].update();
  };

  var Star = function () {
    this.x = center.x;
    this.y = center.y;
    this.init = function () {
      this.radius = Math.random() * _scope.radius;
      this.x = center.x;
      this.y = center.y;
      this.lineWidth = 0;
      this.vel = {
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5
      };
    };
    this.update = function () {
      this.vel.x *= 1.05;
      this.vel.y *= 1.05;
      this.lineWidth += 0.035;
      this.x0 = this.x;
      this.y0 = this.y;
      this.x += this.vel.x;
      this.y += this.vel.y;
      this.draw();
      if (this.isDead()) this.init();
    };
    this.draw = function () {
      context.beginPath();
      context.moveTo(this.x0, this.y0);
      context.lineTo(this.x, this.y);
      context.lineWidth = this.lineWidth;
      context.stroke();
    };
    this.isDead = function () {
      return (
        this.x < 0 ||
        this.x > canvas.width ||
        this.y < 0 ||
        this.y > canvas.height
      );
    };
    this.init();
    return this;
  };
  this.init();
  this.animate();
  return this;
};

var _stars = new Stars();
