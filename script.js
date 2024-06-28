const showUserScore = document.querySelector('#user-score');
const showComputerScore = document.querySelector('#computer-score');
const userOptions = document.querySelector('.options');
let computerChoice = document.querySelector('#computer-choice');
const text = document.querySelector('#text');
const playAgainBtn = document.querySelector('#play-again');

let userScore = 0;
let computerScore = 0;
let computerOptions = ['fa-hand', 'fa-hand-back-fist', 'fa-hand-scissors'];

setInterval(() => {
    showResult();
},100);

userOptions.addEventListener('click', (e) => {
    if (userScore < 3 && computerScore < 3){
        play(e);
    } else {
        showResult();
    }
});

playAgainBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    showUserScore.innerText = '0';
    showComputerScore.innerText = '0';
    playAgainBtn.style.display = 'none';
    text.innerText = 'make your decision!';
});

function showResult(){
    if (userScore === 3) {
        text.innerText = 'voila! you win!'
        playAgainBtn.style.display = 'block';
    } else if (computerScore === 3) {
        text.innerText = 'not the end of the world, you can try again :)'
        playAgainBtn.style.display = 'block';
    }
}

function computerDecide(){
    let r = Math.floor(Math.random() * 3);
    computerChoice.classList.remove(...computerChoice.classList);
    computerChoice.classList.add('fa-regular', computerOptions[r]);
    return r;
}

function computerScored(){
    computerScore++;
    showComputerScore.innerText = computerScore;
}

function userScored(){
    userScore++;
    showUserScore.innerText = userScore;
}

function play(e){
    let r = computerDecide();
    if (e.target.classList.contains('fa-hand')){
        switch (r) {
            case 0:
                text.innerText = 'tie tie tie! (-tuco salamanca)'
                break;
            case 1:
                userScored();
                text.innerHTML = 'great job!';
                break;
            case 2:
                computerScored();
                text.innerHTML = 'good try :/';
        }
    } else if (e.target.classList.contains('fa-hand-back-fist')){
        switch (r) {
            case 0:
                computerScored();
                text.innerText = 'good try :/';
                break;
            case 1:
                text.innerHTML = 'tie tie tie! (-tuco salamanca)';
                break;
            case 2:
                userScored();
                text.innerHTML = 'great job!';
        }
    } else if (e.target.classList.contains('fa-hand-scissors')){
        switch (r) {
            case 0:
                userScored();
                text.innerText = 'great job!';
                break;
            case 1:
                computerScored();
                text.innerHTML = 'good try :/';
                break;
            case 2:
                text.innerHTML = 'tie tie tie! (-tuco salamanca)';
        }
    }
}