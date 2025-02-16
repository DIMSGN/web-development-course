const { nameSlice } = require('./strSlice'); // Import the nameSlice function

function main() {
    // Test different slices
    nameSlice(0, 3); // Expected output: "Dim"
    nameSlice(3, 7); // Expected output: "itri"
    nameSlice(0, 8); // Expected output: "Dimitris"
    nameSlice(1, 4); // Expected output: "imi"
}

main(); // Run the main function