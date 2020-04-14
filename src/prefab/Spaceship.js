class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        //add obj to existing scene
        scene.add.existing(this); //add to existing, displayList, updateList
        this.points = pointValue;
    }

    update(){
        //move left
        this.x -= 3;
        //iterate showing up
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    reset(){
        this.x = game.config.width;
    }
}