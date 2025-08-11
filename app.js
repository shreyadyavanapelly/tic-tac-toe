let playerX=true;
let number=0;
let isWinner=false;
const winningpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let allbtns=document.querySelectorAll(".btn");
let winmsg=document.querySelector("#winner");
let newbtn=document.querySelector(".new");
let resetbtn=document.querySelector("#reset");
function reset(){
    for(let btn of allbtns){
        btn.innerText="";
        btn.disabled=false;
        playerX=true;
    }
    winmsg.innerText="";
    number=0;
}
function reset2(){
    for(let btn of allbtns){
        btn.innerText="";
        btn.disabled=false;
        playerX=true;
    }
   newbtn.classList.add("new");
   winmsg.innerText="";
   number=0;
}

newbtn.addEventListener("click",reset2);
resetbtn.addEventListener("click",reset);
function checkanswer(){
    for(let pattern of winningpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(allbtns[pattern[0]].innerText,allbtns[pattern[1]].innerText,allbtns[pattern[2]].innerText);
        // if(allbtns[btn[0]].innerText==allbtns[btn[1]].innerText && allbtns[btn[1]].innerText==allbtns[btn[2]].innerText)
        //     console.log("correct answer");
    
    let val1=allbtns[pattern[0]].innerText.trim();
    let val2=allbtns[pattern[1]].innerText.trim();
    let val3=allbtns[pattern[2]].innerText.trim();
   if(val1!="" && val2!="" && val3!=""){
    if(val1===val2 && val2===val3){
        console.log("winner");
        winmsg.innerText=`Congratulations!Winner is player ${val1}`;
        isWinner=true;
       for(let btn of allbtns){
        btn.disabled=true;
       }
       newbtn.classList.remove("new");
       return;
    }
   }
}
}
for(let btn of allbtns){
    btn.addEventListener("click",()=>{
        if(playerX==true){ 
            btn.innerText="X";
            playerX=false;
            btn.disabled=true;
        }else{
            btn.innerText="O";
            playerX=true;
            btn.disabled=true;
        }
        checkanswer();
        number++;
        console.log(number);
        if(number==9 && !isWinner){
    winmsg.innerText="Its a Draw";
}
    })
}