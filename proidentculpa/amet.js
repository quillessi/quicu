function applyNumberRule(numbers) {
    // Define the rule: Check if a number is even or odd
    numbers.forEach(number => {
        if (number % 2 === 0) {
            console.log(`${number} is even.`);
        } else {
            console.log(`${number} is odd.`);
        }
    });
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6];
applyNumberRule(numbersArray);
// Output:
// 1 is odd.
// 2 is even.
// 3 is odd.
// 4 is even.
// 5 is odd.
// 6 is even.
