let guess = Number(prompt("Guess the number"));

while (guess !== 10) {
    if (guess < 10) {
        console.log("Too low!");
    } else {
        console.log("Too high!");
    }

    guess = Number(prompt("Guess again"));
}

console.log("Correct guess!");

/*let guess = Number(prompt("Guess the number"));
let attempts = 1;

while (guess !== 10) {
    if (guess < 10) {
        console.log("Too low!");
    } else {
        console.log("Too high!");
    }

    guess = Number(prompt("Guess again"));
    attempts++;
}

console.log("Correct guess!");
console.log(`Attempted ${attempts} times.`);*/