const circles = document.querySelectorAll(".choice");
const chooseScr = document.querySelector("#choose");
const resScr = document.querySelector("#result");
const pc = document.querySelector("#pc");
const cc = document.querySelector("#cc");
const score = document.querySelector("#score");
const wolod = document.querySelector("#wolod");
const playAgain = document.querySelector("#playAgain");
const replay = document.querySelector("#replay");
const rules = document.querySelector("#rules");
const dialog = document.querySelector("dialog");
const closeBut = document.querySelector("#close");

replay.addEventListener("click", () => {
    resScr.style.display = "none";
    chooseScr.style.display = "block";

    cc.style.backgroundColor = "transparent";
    cc.style.backgroundImage = "none";
    cc.style.border = "1px solid white";
    playAgain.style.display = "none";
});

const giveWinner = (pc, cc) => {
    if (pc == cc) {
        return 0;
    } else {
        if (pc == "rock") {
            if (cc == "paper") {
                return 2;
            } else {
                return 1;
            }
        } else if (pc == "paper") {
            if (cc == "scissors") {
                return 2;
            } else {
                return 1;
            }
        } else if (pc == "scissors") {
            if (cc == "rock") {
                return 2;
            } else {
                return 1;
            }
        }
    } 
}

const compChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

/**
 * 
 * @param {Event} ev 
 */

const mainFunc = (ev) => {
    const playerChoice = ev.currentTarget.classList.item(1);
    const compuChoice = compChoice();

    const winner = giveWinner(playerChoice, compuChoice);

    chooseScr.style.display = "none";
    resScr.style.display = "grid";
    
    switch(playerChoice) {
        case "rock": pc.style.border = "15px solid hsl(349, 71%, 52%)";
        break;
        case "paper": pc.style.border = "15px solid hsl(230, 89%, 62%)";
        break;
        case "scissors": pc.style.border = "15px solid hsl(39, 89%, 49%)"
    }

    pc.style.backgroundColor = "white";
    pc.style.backgroundImage = `url('./images/icon-${playerChoice}.svg')`;
    pc.style.backgroundPosition = "center";
    pc.style.backgroundRepeat = "no-repeat";
    
    setTimeout(() => {
        switch(compuChoice) {
            case "rock": cc.style.border = "15px solid hsl(349, 71%, 52%)";
            break;
            case "paper": cc.style.border = "15px solid hsl(230, 89%, 62%)";
            break;
            case "scissors": cc.style.border = "15px solid hsl(39, 89%, 49%)"
        }
    
        cc.style.backgroundColor = "white";
        cc.style.backgroundImage = `url('./images/icon-${compuChoice}.svg')`;
        cc.style.backgroundPosition = "center";
        cc.style.backgroundRepeat = "no-repeat";

        if (winner == 1) {
            const oriSco = parseInt(score.textContent);
            score.textContent = oriSco + 1;
            wolod.textContent = "WON";
        } else if (winner == 2) {
            wolod.textContent = "LOST";
        } else {
            wolod.textContent = "DREW";
        }

        playAgain.style.display = "block";
    }, 1000)
    
}

rules.addEventListener("click", () => {
    dialog.showModal();
})

closeBut.addEventListener("click", () => {
    dialog.close();
})

for (i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", mainFunc);
}