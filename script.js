let box = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#restart");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let mainContainer = document.querySelector("#main");

let turn0 = true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


const resetGame = () => {
    turn0 = true; 
    enableBox();
    msgContainer.classList.add("hide");
}

box.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("the box is clicked");
        if(turn0){
            box.innerHTML = "0";
            turn0 = false;
        }else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disableBox = () => {
    for(let boxes of box){
        boxes.disabled = true;
    }
}
const enableBox = () => {
    for(let boxes of box){
        boxes.disabled = false;
        boxes.innerText = "";
    }
}
const showWinner = (Winner) => {
    msg.innerText =`Congratulation! 
                     ${Winner} Win's`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const tieGame = () => {
    msg.innerText = "It's a Tie Game!";
    msgContainer.classList.remove("hide");
    disableBox();
}
const tie = () => {
    let count = 0;
    for(let boxes of box){
        if(boxes.innerText!= ""){
            count++;
        }
    }
    if(count == 9){
        tieGame();
    }
}
const checkWinner = () => {
    for(let pattern of winPattern){
        let posVal1 = box[pattern[0]].innerText;
        let posVal2 = box[pattern[1]].innerText;
        let posVal3 = box[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("we have a Winner");
                showWinner(posVal1);
            }else{
                tie();
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);