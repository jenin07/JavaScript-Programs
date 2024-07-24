let random = parseInt((Math.random() * 100+1));

const submit = document.querySelector('#subt');
const uinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p')

let prevguess = [];
let numguess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(uinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("not a valid number")
    }else if (guess < 1){
        alert("enter a number more than 1")
    }else if(guess > 100){
        alert("enter a number less than 100")
    }else{
        prevguess.push(guess)
        if(numguess === 11){
            displayGuess(guess)
            displayMessage(`Game over! Random number was ${random}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(random === guess){
        displayMessage(`You guessed it right`)
        endgame()
    }else if(guess < random){
        displayMessage(`Number is Too low`)
    }else if(guess > random){
        displayMessage(`Number is Too high`)
    }
}

function displayGuess(guess){
    uinput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
    uinput.value = '';
    uinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newgame();

}

function newgame(){
    const button = document.querySelector('#newGame');
    button.addEventListener('click', function (e) {
        random = parseInt((Math.random() * 100+1));
        prevguess = [];
        numguess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numguess}`;
        uinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

