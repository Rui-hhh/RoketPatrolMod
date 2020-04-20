// Mod class 
class Rocket2 extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add obj to existing scene
        scene.add.existing(this); //add to existing, displayList, updateList
        this.isFiring = false;

        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update(){
        //L/R movement
        if(!this.isFiring){
            if(keyA.isDown && this.x >= 47) this.x -= 2;
            else if(keyD.isDown && this.x <= 578) this.x +=2;
        }
        // //fire button
        // if(Phaser.Input.Keyboard.JustDown(keyF)){
        //     this.isFiring = true;
        // }

        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyS) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }

        //if fired, move up
        if(this.isFiring && this.y >= 108){
            this.y -= 2;
        }
        //reset on miss
        if(this.y <= 108){
            this.isFiring = false;
            this.y = 431;
        }
    }

    reset(){
        this.isFiring = false;
        this.y = 431;
    }
} 