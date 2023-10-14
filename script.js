let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];
let start=false;
let level=0;
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        console.log("game started");

        levelup();
    }
})
 
let h2=document.querySelector("h2");

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randind=Math.floor(Math.random()*4);
    let btncolor=btns[randind];

    let randbtn=document.querySelector(`.${btncolor}`);
    gameseq.push(btncolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(idx){

    if(gameseq[idx]==userseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over. Your score was <b>${level}</b> <br>Press any key to start`;
        start=false;
        gameseq=[];
        userseq=[];
        level=0;
    }
}

function btnpress(){
    let btn=this;
    btnflash(btn);
    
    usercol=btn.getAttribute("id");
    userseq.push(usercol);

    checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

