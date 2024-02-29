// NUMBER GUESSING GAME
const submitBtn = document.getElementById("submitBtn");
const guessText = document.getElementById("guess");
const attemptsCounter = document.getElementById("attemptsCounter");
const tryInput = document.getElementById("try");

const minNum = 1;
const maxNum = 100;
// gerando numero aleatorio de 1 a 100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

//let porque vai ser reatribuida
let attempts = 0;
let guess;

submitBtn.addEventListener("click", () => {
    submitGuess();
});

tryInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        submitGuess();
    }
})

function submitGuess() {
    guess = tryInput.value;
    console.log(guess);
    clearInput();

    if (isNaN(guess)) {
        window.alert("please input a valid number.");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("please, only numbers from 1 - 100")
    }
    else {
        attempts++;

        if (guess < answer) {
            document.body.querySelector("#guess").textContent = "too low!";
        }
        else if (guess > answer) {
            document.body.querySelector("#guess").textContent = "too high!";
        }
        else {
            document.body.querySelector("#guess").textContent = "congrats! you win!";


            document.body.querySelector("#attempts").textContent = attempts;
            document.querySelector(".attempts").style.display = "block";
        }
    }
};

function clearInput(string) {
    tryInput.value = " ";
};
