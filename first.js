let turn = true;
let X = 0;
let O = 0;
let D = 0;
let boxes = document.querySelectorAll(".box");
let chance = 0;

const winningcomb = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const reset = () => {
    for (box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    chance = 0;
}

rst = document.getElementById("reset");
rst.addEventListener("click", () => reset());

const disable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        chance++;
        box.disabled = true;
        let win = checkwinner();
        if (!win && chance == 9) {
            D++;
            disable();
            document.getElementById("Draws").innerText = D;
            chance = 0;
        }
    })
});

const checkwinner = () => {
    for (comb of winningcomb) {

        let pos1 = boxes[comb[0]].innerText;
        let pos2 = boxes[comb[1]].innerText;
        let pos3 = boxes[comb[2]].innerText;


        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                if (pos1 == "X") {
                    X++;
                    document.getElementById("winX").innerText = X;
                }
                if (pos1 == "O") {
                    O++;
                    document.getElementById("winO").innerText = O;
                }
                disable();
                return true;
            }
        }
    }
    return false;
}