//define variables
const buttonEl= document.querySelector(".button");
const button1ImageEl=document.querySelector(".dice__image1");
const button2ImageEl=document.querySelector(".dice__image2");
const button3ImageEl=document.querySelector(".dice__image3");
const button4ImageEl=document.querySelector(".dice__image4");
const button5ImageEl=document.querySelector(".dice__image5");
const button6ImageEl=document.querySelector(".dice__image6");
const soundEl=document.getElementById("sound");
const keep1El=document.getElementById("keep1");
const keep2El=document.getElementById("keep2");
const keep3El=document.getElementById("keep3");
const keep4El=document.getElementById("keep4");
const keep5El=document.getElementById("keep5");
const keep6El=document.getElementById("keep6");
const rouletteMsgEl=document.querySelector(".roulette__msg");
const rouletteButtonEl=document.querySelector(".roulette__button");
const resetButtonEl=document.querySelector(".resetButton");
const rollCountEl=document.querySelector(".rollCount");
const total1El=document.querySelector(".total1");
const redo1El=document.querySelector(".redo1");

let rollCount=0


//definte functions
function keepOrRoll(){
 keep1El.addEventListener("click", function(){
    keep1El.classList.toggle("keep");
    keep1El.classList.toggle("roll");
    if (keep1El.classList.contains("keep")){
        keep1El.innerText="Keep"
      }else {
        keep1El.innerText="Roll"
    }
    console.log(keep1El.classList);
  });
   /**/
  keep2El.addEventListener("click", function(){
    keep2El.classList.toggle("keep");
    keep2El.classList.toggle("roll");
    if (keep2El.classList.contains("keep")){
        keep2El.innerText="Keep"
     }else {
       keep2El.innerText="Roll"
    }
  console.log(keep2El.classList);
  });
  keep3El.addEventListener("click", function(){
    keep3El.classList.toggle("keep");
    keep3El.classList.toggle("roll");
    if (keep3El.classList.contains("keep")){
            keep3El.innerText="Keep"
    }else {
      keep3El.innerText="Roll"
    }
    console.log(keep3El.classList);
  });
  keep4El.addEventListener("click", function(){
    keep4El.classList.toggle("keep");
    keep4El.classList.toggle("roll");
    if (keep4El.classList.contains("keep")){
        keep4El.innerText="Keep"
     }else {
       keep4El.innerText="Roll"
    }
    console.log(keep4El.classList);
  });
  keep5El.addEventListener("click", function(){
    keep5El.classList.toggle("keep");
    keep5El.classList.toggle("roll");
    if (keep5El.classList.contains("keep")){
        keep5El.innerText="Keep"
     }else {
       keep5El.innerText="Roll"
    }
    console.log(keep5El.classList);
  });
  keep6El.addEventListener("click", function(){
    keep6El.classList.toggle("keep");
    keep6El.classList.toggle("roll");
    if (keep6El.classList.contains("keep")){
        keep6El.innerText="Keep"
     }else {
       keep6El.innerText="Roll"
    }
    console.log(keep6El.classList);
  });
  /**/
}

function rollDice(){
  buttonEl.addEventListener("click", function(){
    //play sound
    //setTimeout( function(){
      //soundEl.play();
    //},500);
    rollCount = rollCount+1
    rollCountEl.innerHTML= rollCount
    if (keep1El.classList.contains("roll")){
      let currAngle = 0;
      let timeDelay = 500;
      for (let i=1; i<24; i++) {
        setTimeout(function () {
          let diceFace = Math.floor(Math.random()*6)+1;
          //console.log(diceFace);
          button1ImageEl.src = "images/dice" + diceFace + ".png";
          button1ImageEl.style.transform = "rotate(" + currAngle + "deg)";
          //console.log(currAngle);
          //console.log(timeDelay);
          currAngle += 16.36
        },timeDelay)
        timeDelay = timeDelay + 10*i;
      }
    }
    if (keep2El.classList.contains("roll")){
      let currAngle2=0
      let timeDelay2 = 500;
      for (let i=1; i<24; i++) {
        setTimeout(function () {
          let diceFace = Math.floor(Math.random()*6)+1;
          //console.log(diceFace);
          button2ImageEl.src = "images/dice" + diceFace + ".png";
          button2ImageEl.style.transform = "rotate(" + currAngle2 + "deg)";
          //console.log(currAngle2);
          //console.log(timeDelay2);
          currAngle2 += 16.36
        },timeDelay2)
        timeDelay2 = timeDelay2 + 10*i;
      }
    }
    /**/
    if (keep3El.classList.contains("roll")){
      let currAngle3=0
      let timeDelay3 = 500;
      for (let i=1; i<24; i++) {
        setTimeout(function () {
          let diceFace = Math.floor(Math.random()*6)+1;
          //console.log(diceFace);
          button3ImageEl.src = "images/dice" + diceFace + ".png";
          button3ImageEl.style.transform = "rotate(" + currAngle3 + "deg)";
          //console.log(currAngle3);
          //console.log(timeDelay3);
          currAngle3 += 16.36
        },timeDelay3)
        timeDelay3 = timeDelay3 + 10*i;
      }
    }
    if (keep4El.classList.contains("roll")){
      let currAngle4=0
      let timeDelay4 = 500;
      for (let i=1; i<24; i++) {
        setTimeout(function () {
          let diceFace = Math.floor(Math.random()*6)+1;
          //console.log(diceFace);
          button4ImageEl.src = "images/dice" + diceFace + ".png";
          button4ImageEl.style.transform = "rotate(" + currAngle4 + "deg)";
          //console.log(currAngle4);
          //console.log(timeDelay4);
          currAngle4 += 16.36
        },timeDelay4)
        timeDelay4 = timeDelay4 + 10*i;
      }
    }
    if (keep5El.classList.contains("roll")){
      let currAngle5=0
      let timeDelay5 = 500;
      for (let i=1; i<24; i++) {
        setTimeout(function () {
          let diceFace = Math.floor(Math.random()*6)+1;
          //console.log(diceFace);
          button5ImageEl.src = "images/dice" + diceFace + ".png";
          button5ImageEl.style.transform = "rotate(" + currAngle5 + "deg)";
          //console.log(currAngle5);
          //console.log(timeDelay5);
          currAngle5 += 16.36
        },timeDelay5)
        timeDelay5 = timeDelay5 + 10*i;
      }
    }
    if (keep6El.classList.contains("roll")){
      let currAngle6=0
      let timeDelay6 = 500;
      for (let i=1; i<24; i++) {
        setTimeout(function () {
          let diceFace = Math.floor(Math.random()*6)+1;
          //console.log(diceFace);
          button6ImageEl.src = "images/dice" + diceFace + ".png";
          button6ImageEl.style.transform = "rotate(" + currAngle6 + "deg)";
          //console.log(currAngle6);
          //console.log(timeDelay6);
          currAngle6 += 16.36
        },timeDelay6)
        timeDelay6 = timeDelay6 + 10*i;
      }
    }
    /**/
  });
}

function rouletteRoll() {
  rouletteButtonEl.addEventListener("click", function(){
    let timeDelay7 = 500;
    for (let i=1; i<24; i++) {
      setTimeout(function () {
        let rouletteMsgIndex = Math.floor(Math.random()*6)+1;
        //console.log(rouletteMsgIndex);
        switch (rouletteMsgIndex) {
          case 1:
            rouletteMsgEl.innerHTML = "STEAL A NUMBER. SAME COMBO ONLY";
            break;
          case 2:
            rouletteMsgEl.innerHTML = "'GIFT' A NUMBER. SAME COMBO ONLY";
            break;
          case 3:
            rouletteMsgEl.innerHTML = "SWAP TWO OF YOUR OWN NUMBERS";
            break;
          case 4:
            rouletteMsgEl.innerHTML = "RESET REDO FOR TWO";
            break;
          case 5:
            rouletteMsgEl.innerHTML = "DELETE ANY NUMBER. YOURS OR A FRIEND'S";
            break;
          case 6:
            rouletteMsgEl.innerHTML = "SWAP A SCORE WITH A FRIEND. SAME COMBO ONLY";
            break;
          case 7:
            rouletteMsgEl.innerHTML = "NADA. BETTER LUCK NEXT TIME";
            break;
        }
        //button6ImageEl.style.transform = "rotate(" + currAngle6 + "deg)";
        //console.log(currAngle6);
        //console.log(timeDelay6);
        //currAngle6 += 16.36
      },timeDelay7)
      timeDelay7 = timeDelay7 + 10*i;
    }
  })
}


function resetTurn(){
  resetButtonEl.addEventListener("click", function(){
    rollCount=0
    rollCountEl.innerHTML= rollCount
    keep1El.classList.remove("keep");
    keep1El.classList.add("roll");
    keep1El.innerHTML="Roll";
    keep2El.classList.remove("keep");
    keep2El.classList.add("roll");
    keep2El.innerHTML="Roll";
    keep3El.classList.remove("keep");
    keep3El.classList.add("roll");
    keep3El.innerHTML="Roll";
    keep4El.classList.remove("keep");
    keep4El.classList.add("roll");
    keep4El.innerHTML="Roll";
    keep5El.classList.remove("keep");
    keep5El.classList.add("roll");
    keep5El.innerHTML="Roll";
    keep6El.classList.remove("keep");
    keep6El.classList.add("roll");
    keep6El.innerHTML="Roll";
    console.log(Number(redo1El.firstElementChild.innerHTML))
  })
}

//calculate totals
total1El.innerHTML= Number(redo1El.firstElementChild.innerHTML) + 0
console.log(redo1El.firstElementChild)

//run functions
rollDice();
keepOrRoll();
rouletteRoll();
resetTurn()



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