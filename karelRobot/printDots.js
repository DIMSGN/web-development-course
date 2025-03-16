function printDots(karel) {
    for (let y = 0; y < 6; y++) {
        let row = "";
        for (let x = 0; x < 6; x++) {
            if (x === karel.position.x && y === karel.position.y) {
                row += "🤖 "; // Karel's position
            } else if (x === karel.shop.x && y === karel.shop.y) {
                row += "🏪 "; // Shop location
            } else {
                row += ". "; // Empty space
            }
        }
        console.log(row.trim());
    }
}

module.exports = printDots;