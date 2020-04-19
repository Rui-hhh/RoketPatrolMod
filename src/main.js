// this is the mod version

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}

//reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;

// Implementing choice:
// 1) Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
// 2) Implement a new timing/scoring mechanism that adds time to the clock for successful hits (25)
// 3) Implement a simultaneous two-player mode (50)