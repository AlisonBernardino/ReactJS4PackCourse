// Buttons && scores configurations

// Player 01
// Status = 
let controlButtonA = document.querySelector('#controlButtonA');
let player01Score = document.querySelector('#score01');
let score01 = 0;

// Player 02
// Status = 
let controlButtonB = document.querySelector('#controlButtonB');
let player02Score = document.querySelector('#score02');
let score02 = 0;

let reset = document.querySelector('#reset');
let winner = document.querySelector('#winner');

// ButtonA functionality
// Status = 
controlButtonA.addEventListener("click",function(){
    let limit = document.querySelector('#limitInput').value;

    score01++;

    player01Score.textContent = score01;

    if (score01 == limit || (score01 > score02 && score01 > limit)){
        player01Score.classList.add("green");
        controlButtonA.setAttribute("disabled","true");
        controlButtonB.setAttribute("disabled","true");

        printWinner();
    }
});

// ButtonB functionality
// Status = 
controlButtonB.addEventListener("click", function(){
    let limit = document.querySelector('#limitInput').value;

    score02++;

    player02Score.textContent = score02;

    if(score02 == limit || (score02 > score01 && score02 > limit)){
        player02Score.classList.add("green");
        controlButtonA.setAttribute("disabled","true");
        controlButtonB.setAttribute("disabled","true");

        printWinner();
    }
});

// Reset button functionality
// Status = All set!
reset.addEventListener("click",function(){
    controlButtonA.removeAttribute("disabled");
    controlButtonB.removeAttribute("disabled");

    player01Score.classList.remove("green");
    player02Score.classList.remove("green");

    score01 = 0;
    score02 = 0;

    player01Score.textContent = score01;
    player02Score.textContent = score02;

    document.querySelector('#limitInput').value = 5;

    winner.textContent = "";
})

// Winner functionality
// Status = 
function printWinner(){
    if(score01 > score02){
        winner.textContent = "Jogador 01";
    }else{
        winner.textContent = "Jogador 02";
    }
}