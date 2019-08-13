//define variables
const buttonEl= document.querySelector(".button");
const buttonImageEl=document.querySelector(".dice__image");
const soundEl=document.getElementById("sound");

//definte functions
function rollDice(){
  buttonEl.addEventListener("click", function(){
    //play sound
    setTimeout( function(){
      soundEl.play();
    },500);
    //rotate dice images
    let currAngle = 0;
    let timeDelay = 500;
    for (let i=1; i<24; i++) {
      setTimeout(function () {
        let diceFace = Math.floor(Math.random()*6)+1;
        console.log(diceFace);
        buttonImageEl.src = "images/dice" + diceFace + ".png";
        buttonImageEl.style.transform = "rotate(" + currAngle + "deg)";
        console.log(currAngle);
        console.log(timeDelay);
        currAngle += 16.36
      },timeDelay)
      timeDelay = timeDelay + 10*i;
    }
  })
}

//run functions
rollDice();

/*function initiateLoopDelay(){
  console.log("initiateLoop!!");
  while (currAngle<60) {
    setTimeout(function() {
      //rollDice();
      console.log(currAngle);
      console.log(timeDelay);
      let diceFace = Math.floor(Math.random()*6)+1;
      console.log(diceFace);
      buttonImageEl.src = "images/dice" + diceFace + ".png";
      buttonImageEl.style.transform = "rotate(" + currAngle + "deg)";
      currAngle += 30;
      timeDelay += 2000;
    },1000);
  }
}

/*function buttonPress() {
  buttonEl.addEventListener("click", function(){
    initiateLoopDelay();
  })
}

//run function
//buttonPress();


/*select image based on value of diceFace
      currAngle = currAngle+20;
      switch (diceFace) {
        case 1:
          console.log("face 1");
          buttonImageEl.src = "images/dice1.png";
          //buttonImageEl.classList.add("rotate");
          break;
        case 2:
          console.log("face 2");
          buttonImageEl.src = "images/dice2.png";
          //buttonImageEl.classList.add("rotate");
          break;
        case 3:
          console.log("face 3");
          buttonImageEl.src = "images/dice3.png";
          break;
        case 4:
          console.log("face 4");
          buttonImageEl.src = "images/dice4.png";
          break;
        case 5:
          console.log("face 5");
          buttonImageEl.src = "images/dice5.png";
          break;
        case 6:
          console.log("face 6");
          buttonImageEl.src = "images/dice6.png";
          break;
      }*/

      /*function rollDice(){
  buttonEl.addEventListener("click", function() {
    while (currAngle <150) {
      let diceFace = Math.floor(Math.random()*6)+1
      console.log(diceFace);
      buttonImageEl.src = "images/dice" + diceFace + ".png";
      buttonImageEl.style.transform = "rotate(" + currAngle + "deg)";
      //console.log(currAngle);
      currAngle += 30;
      setTimeout(function(){
        console.log(currAngle);
      },2000)
    }
  })
}*/