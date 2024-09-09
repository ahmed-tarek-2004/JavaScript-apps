let cell1 = document.getElementById("cell1");
let flage = true;
let counter = 0;
cell1.addEventListener("click", () => {
    if (cell1.textContent != "")
        return;
    counter++;
    cell1.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})

let myAlert = document.getElementById("result");
let ok = document.getElementById("ok");
let winner=document.getElementById("winner");
let cell2 = document.getElementById("cell2");
cell2.addEventListener("click", () => {
    if (cell2.textContent != "")
        return;
    counter++;
    cell2.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})


let cell3 = document.getElementById("cell3");
cell3.addEventListener("click", () => {
    if (cell3.textContent != "")
        return;
    counter++;
    cell3.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})


let cell4 = document.getElementById("cell4");
cell4.addEventListener("click", () => {
    if (cell4.textContent != "")
        return;
    counter++;
    cell4.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})


let cell5 = document.getElementById("cell5");
cell5.addEventListener("click", () => {
    if (cell5.textContent != "")
        return;
    counter++;
    cell5.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})


let cell6 = document.getElementById("cell6");
cell6.addEventListener("click", () => {
    if (cell6.textContent != "")
        return;
    counter++;
    cell6.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})


let cell7 = document.getElementById("cell7");
cell7.addEventListener("click", () => {
    if (cell7.textContent != "")
        return;
    counter++;
    cell7.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})
let cell8 = document.getElementById("cell8");
cell8.addEventListener("click", () => {
    if (cell8.textContent != "")
        return;
    counter++;
    cell8.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})


let cell9 = document.getElementById("cell9");
cell9.addEventListener("click", () => {
    if (cell9.textContent != "")
        return;
    counter++;
    cell9.textContent = (flage == true ? "X" : "O");
    flage = !flage;
    console.log(flage);
    gameState();
})
gameState();
let button = document.getElementById("button");
button.addEventListener("click", () => {
    let temp = "";
    flage = true;
    counter = 0;
    cell1.textContent = temp;
    cell2.textContent = temp;
    cell3.textContent = temp;
    cell4.textContent = temp;
    cell5.textContent = temp;
    cell6.textContent = temp;
    cell7.textContent = temp;
    cell8.textContent = temp;
    cell9.textContent = temp;
})

function gameState() {
    // X winning
    console.log(counter)
    // rows winng
    if (cell1.textContent === "X" && cell2.textContent === "X" && cell3.textContent === "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell4.textContent == 'X' && cell5.textContent == "X" && cell6.textContent == "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell7.textContent == 'X' && cell8.textContent == "X" && cell9.textContent == "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }

    // cross winning
    if (cell1.textContent == 'X' && cell5.textContent == "X" && cell9.textContent == "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell3.textContent == 'X' && cell5.textContent == "X" && cell7.textContent == "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }

    //column winning
    if (cell1.textContent == 'X' && cell4.textContent == "X" && cell7.textContent == "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell2.textContent == 'X' && cell5.textContent == "X" && cell8.textContent == "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell3.textContent == 'X' && cell6.textContent == "X" && cell9.textContent == "X") {
        myAlert.style.removeProperty("display");
        winner.textContent="X IS The Winner";
        myAlert.style.setProperty("display", "block");
    }

    // O winning
    console.log(counter)
    // rows winng
    if (cell1.textContent === "O" && cell2.textContent === "O" && cell3.textContent === "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell4.textContent == 'O' && cell5.textContent == "O" && cell6.textContent == "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell7.textContent == 'O' && cell8.textContent == "O" && cell9.textContent == "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }

    // cross winning
    if (cell1.textContent == 'O' && cell5.textContent == "O" && cell9.textContent == "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell3.textContent == 'O' && cell5.textContent == "O" && cell7.textContent == "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }

    //column winning
    if (cell1.textContent == 'O' && cell4.textContent == "O" && cell7.textContent == "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell2.textContent == 'O' && cell5.textContent == "O" && cell8.textContent == "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (cell3.textContent == 'O' && cell6.textContent == "O" && cell9.textContent == "O") {
        myAlert.style.removeProperty("display");
        winner.textContent="O IS The Winner";
        myAlert.style.setProperty("display", "block");
    }
    if (counter == 9) {

        myAlert.style.removeProperty("display");
        winner.textContent="Two Players Are Tied";
        myAlert.style.setProperty("display", "block");
    }
    ok.onclick = () => {
        myAlert.style.setProperty("display", "none");
        let temp = "";
        flage = true;
        counter = 0;
        cell1.textContent = temp;
        cell2.textContent = temp;
        cell3.textContent = temp;
        cell4.textContent = temp;
        cell5.textContent = temp;
        cell6.textContent = temp;
        cell7.textContent = temp;
        cell8.textContent = temp;
        cell9.textContent = temp;
    }
}