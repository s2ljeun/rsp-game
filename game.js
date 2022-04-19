    const body = document.querySelector("body");
    const display = document.querySelector("#display");
    const resultDisplay = document.querySelector("#result-display");

    const userBtn = document.querySelectorAll(".user-btn");
    const scissors = document.querySelector("#scissors");
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");

    const retryBtn = document.querySelector("#retry-btn");
    retryBtn.addEventListener("mousedown", retry);

    const hands = ["✌","✊","🖐"];
    let num = 0;

    scissors.addEventListener("mousedown",selectAnswer);
    rock.addEventListener("mousedown",selectAnswer);
    paper.addEventListener("mousedown",selectAnswer);

    function paintHand(){
        if(num < 2){
            display.innerHTML = hands[num];
            num++;
        }
        else{
            display.innerHTML = hands[num];
            num = 0;
        }
    }

    function selectAnswer(event){
        const userAnswer = hands.indexOf(event.target.innerText);
        const autoAnswer = hands.indexOf(display.innerHTML);
        const result = userAnswer - autoAnswer;

        if(result == -2 || result == 1){
            resultDisplay.append("You Win!!!");
            resultDisplay.style.color = "blue";
        }
        else if(result == -1 || result == 2){
            resultDisplay.append("You Lose!!!");
            resultDisplay.style.color = "red";
        }
        else if(result == 0){
            resultDisplay.append("DRAW...");
        }

        clearInterval(myInterval);
        disableBtn();
        retryBtn.hidden = false;
    }

    function disableBtn(){
        for (let i = 0; i < userBtn.length; i++) {
            userBtn[i].disabled = true;
        }
    }

    function retry(){
        for (let i = 0; i < userBtn.length; i++) {
            userBtn[i].disabled = false;
            resultDisplay.innerHTML = "";
            };
            resultDisplay.style.color = "";
            retryBtn.hidden = true;
            myInterval = setInterval(paintHand, 500);
    }

    paintHand();

    let myInterval = setInterval(paintHand, 500);