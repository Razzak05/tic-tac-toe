let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let turnO = true;
let gameWon = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

resetButton.addEventListener("click", resetGame);

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    gameWon = false;
}

function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner: ", pos1val);
                gameWon = true;
                disableAllBoxes();
                break;
            }
        }
    }

    // Check for a tie (all boxes filled)
    if (!gameWon && Array.from(boxes).every((box) => box.innerText !== "")) {
        console.log("It's a tie!");
    }
}

function disableAllBoxes() {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameWon && box.innerText === "") {
            console.log("Box was clicked");
            if (turnO) {
                box.innerText = "O";
            } else {
                box.innerText = "X";
            }
            turnO = !turnO;
            box.disabled = true;
            checkWinner();
        }
    });
});
