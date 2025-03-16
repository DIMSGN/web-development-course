class Karel {
    constructor() {
        this.position = { x: 0, y: 5 }; // Start position
        this.shop = { x: 5, y: 0 }; // Shop location
    }
  
    move(direction, steps) {
        for (let i = 0; i < steps; i++) {
            if (direction === "up" && this.position.y > 0) this.position.y--;
            if (direction === "down" && this.position.y < 5) this.position.y++;
            if (direction === "left" && this.position.x > 0) this.position.x--;
            if (direction === "right" && this.position.x < 5) this.position.x++;
        }
        console.log(`➡️ Karel moved ${direction} ${steps} steps`);
    }
  
    isAtShop() {
        return this.position.x === this.shop.x && this.position.y === this.shop.y;
    }
  }
  
  module.exports = Karel;