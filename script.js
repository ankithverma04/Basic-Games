let boxes = document.querySelectorAll(".box");
let turnX = true;
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector(".msg");

let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("BUttuon clicked");
        if (turnX) {
            box.innerText = 'X';
            turnX = false;
        } else {
            box.innerText = 'O';
            turnX = true;
        }
        box.disabled = true;
        count++;

        let winner = isWinner();
        if (count == 9 && !winner) {
            message.innerHTML = `GAME DRAW`;
            msgContainer.classList.remove("hide")
            disablebtn();
        }
    })
})

const disablebtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const isWinner = () => {
    for (let pattern of winPatterns) {

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                message.innerHTML = `Congratulation "${posVal1}" Wins`;
                msgContainer.classList.remove("hide")
                disablebtn();
                return true;
            }
        }
    }
    return false;
}

const resetGame = () => {
    turnX = true;
    enablebtns();
    count = 0; 
    msgContainer.classList.add("hide");
}

const enablebtns = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);