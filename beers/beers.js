function bottlesOfBeer() {
    let bottles = 99;

 while (bottles > 0) {
     console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");
     bottles--;
     console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
 }
 console.log("No more bottles of beer on the wall, no more bottles of beer.");

}
module.exports = bottlesOfBeer;