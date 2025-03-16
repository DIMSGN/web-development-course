function getMilk(money) {
    console.log("🏠 Leave House");
    console.log("➡️ Move to the shop...");
    
    let numberOfBottles = Math.floor(money / 1.5);
    console.log(`🛒 Buy ${numberOfBottles} bottles of milk`);

    console.log("⬅️ Return Home");
    console.log("🏠 Enter House");
}

module.exports = getMilk;
