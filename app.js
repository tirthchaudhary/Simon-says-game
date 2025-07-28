
let gameSeq=[];
let userSeq=[];
let highScore=0;

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");

   if(started==false){
    console.log("game is started");
    started=true;
  
      levelUp();

   }

})

function gameFlash(btn){
  
btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },250);
  }

  
function userFlash(btn){
  
btn.classList.add("userFlash");
   setTimeout(function(){
    btn.classList.remove("userFlash")
   },250);
  }


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;


    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);

    gameSeq.push(randColor);
    console.log(gameSeq);
       gameFlash(randBtn);

       highScore.push(level);
          
}
       function checkAns(){
        console.log(`current level ${level}`);
       }

function checkAns(idx){
    // console.log("current leel:",level);



    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{

        if(level>highScore){
            highScore=level;
        }
       
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Highest Score:${highScore}</b><br>Press any key to restart`;

        // h2.innerHTML=`Game Over! Your score was <b>${level}<b>< <br> Press any key to restart.  `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
                    document.querySelector("body").style.backgroundColor="white";

        },250);
        reset();
    }
       printHighScore();

}

function btnPress(){
    console.log(this);
let btn=this;
userFlash(btn);

  userColor=btn.getAttribute("id");
       userSeq.push(userColor);
       checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
started=false;
gameSeq=[];
userSeq=[];
level=0;
}

function printHighScore(){
    const highestScore=Math.max(...highScore);
    console.log("highest score is:",highestScore);
}