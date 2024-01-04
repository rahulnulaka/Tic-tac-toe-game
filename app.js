let boxes=document.querySelectorAll(".box");
let new_game=document.querySelector("#new-game");
let reset=document.querySelector("#reset-game");
let count=0;
let msg=document.querySelector(".winner");
let playero=true;
let winningconditions=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [1,4,7],
    [2,5,8]
]
new_game.addEventListener("click",()=>{
    msg.classList.add("hide");
    playero=true;
    count=0;
    for(let b of boxes){
        b.innerText="";
        b.disabled=false;
    }
});

reset.addEventListener("click",()=>{
    msg.classList.add("hide");
    playero=true;
    for(let b of boxes){
        b.innerText="";
        b.disabled=false;
    }
    count=0;
});

function disableBoxes(){
    for(let b of boxes){
        b.disabled=true;
    }
}

function getWinner(){
    for(let val of winningconditions){
        if(boxes[val[0]].innerText!=""&&boxes[val[1]].innerText!=""&&boxes[val[2]].innerText!=""){
            if(boxes[val[0]].innerText===boxes[val[1]].innerText&&boxes[val[1]].innerText===boxes[val[2]].innerText){
                msg.innerText=`Congratulations! ${boxes[val[0]].innerText}`;
                msg.classList.remove("hide");
                disableBoxes();
                return true;
            }
        }
    };
}

function draw(){
    msg.innerText=`IT'S  A DRAW`;
    msg.classList.remove("hide");
}

boxes.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(playero){
            b.innerText="O";
            playero=false;
        }
        else{
            b.innerText="X";
            playero=true;
        }
        count+=1;
        let w=getWinner();
        b.disabled=true;
        if(count==9&&!w){
            draw();
        }
    });
});
