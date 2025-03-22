function printEven() {
    let i = 1;
    while (i <= 20) {
        if (i % 2 === 0) { // Check if 'i' is even
            console.log(i);  // Print the even number
        }
        i++; // Increment 'i' to avoid infinite loop
    }
}

module.exports = printEven;