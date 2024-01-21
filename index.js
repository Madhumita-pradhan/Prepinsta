const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const n = parseInt(input);

    if (!isNaN(n)) {
        if (n > 0) {
            console.log(`${n} is a positive number`);
        } else if (n === 0) {
            console.log(`${n} is zero`);
        } else {
            console.log(`${n} is a negative number`);
        }
    } else {
        console.log("Please enter a valid number.");
    }

    rl.close();
});
