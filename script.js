let userscore=0;
let compscore=0;

const message=document.querySelector("#message");

const choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
         playgame(userchoice);
    })
})

const gencompchoice=()=>{
  const options=["rock","paper","scissors"];
  const randidx=Math.floor(Math.random() * 3);
  return options[randidx];
}
const drawgame=()=>{
    console.log("game was draw");
    message.innerText="game was draw";
    // message.style.backgroundColor="green";
}
const showwinner=(userwin)=>{
    if(userwin)
    {
        console.log("you win");
        message.innerText="you win";
        message.style.backgroundColor="green";
    }
    else{
        console.log("you loose");
        message.innerText="you loose";
        message.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice = ",compchoice);

  if(userchoice===compchoice)
    {
        //drawgame
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors"? false:true;
        }
        else{
            userwin=compchoice==="rock"? false:true;
        }
        showwinner(userwin);
    }
}

   