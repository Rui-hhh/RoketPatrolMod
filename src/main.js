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
let keyS, keyA, keyD; // (MOD)new keys for the player2

// Implementing choice:
// 1) Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
// 2) Implement a new timing/scoring mechanism that adds time to the clock for successful hits (25) Play.js: 155
// or Implement the speed increase that happens after 30 seconds in the original game (10)
//  & Display the time remaining (in seconds) on the screen (15)
// 3) Implement a simultaneous two-player mode (50)