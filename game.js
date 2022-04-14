    const body = document.querySelector("body");
    const display = document.querySelector("#display");
    const scissors = document.querySelector("#scissors");
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");

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
            body.append("You Win!!!");
        }
        else if(result == -1 || result == 2){
            body.append("You Lose!!!");
        }
        else if(result == 0){
            body.append("DRAW...");
        }

        clearInterval(myInterval);
    }

    paintHand();

    const myInterval = setInterval(paintHand, 500);