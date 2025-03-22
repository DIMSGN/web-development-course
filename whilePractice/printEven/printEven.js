function printEven() {
    let i = 1; // Initialize 'i' to 1
    while (i <= 20) { // Check condition to continue looping while 'i' is less than or equal to 20
        if (i % 2 === 0) { // Check if 'i' is even
            console.log(i); // Print the even number to the console
        }
        i++; // Increment 'i' by 1
    }
}

module.exports = printEven; // Export the function for use in other files
