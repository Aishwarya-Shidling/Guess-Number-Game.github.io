let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    let message = document.getElementById('message');
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100";
        message.style.color = '#ef8568';
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = '#fdc500';
    } else if (userGuess < randomNumber) {
        message.textContent = "⬇️ Too low! Try again.";
        message.style.color = '#f48f8d';
    } else {
        message.textContent = "⬆️ Too high! Try again.";
        message.style.color = '#f48f8d';
    }
}
document.getElementById('guess').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
