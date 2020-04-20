// Hang Rui; hrui; 1630918
// this is the mod version
// Implementing choice:
// 1) Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
// 2) Implement a new timing/scoring mechanism that adds time to the clock for successful hits (25) 
// 3) Implement a simultaneous two-player mode (50)
// Two more classes added: Spaceship_sp, Rocket2
// For the two-player mode, the 2nd rocket is green with different artwork; A, S, D correspond to LEFT, FIRE, RIGHT
// two players work together to earn points, rather than compete each other
// For 2), once the hit succeeds, the delay will +1s; code at Play.js: 155



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

