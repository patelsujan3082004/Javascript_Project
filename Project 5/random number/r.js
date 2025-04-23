const input = document.getElementById("num");
    const btn = document.getElementById("btn");
    const userGuessNum = document.getElementById("userGuessNum");
    const compNum = document.getElementById("compNum");
    const result = document.getElementById("result");
    const chances = document.querySelector(".chances");

    let trails = 5;

    btn.addEventListener("click", () => {
        if (trails > 0) {
            const userGuess = parseInt(input.value);
            const randomNum = Math.floor(Math.random() * 6) + 1;

            userGuessNum.textContent = userGuess;
            compNum.textContent = randomNum;

            if (userGuess === randomNum) {
                result.textContent = "You guessed it right!";
                result.style.color = "green";
            } else {
                result.textContent = "Oops! Try again.";
                result.style.color = "red";
            }

            trails--;
            chances.textContent = trails;

            if (trails === 0) {
                btn.disabled = true;
                result.textContent += " Game over!";
            }
        }
    });