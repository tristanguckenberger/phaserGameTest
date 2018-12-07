class mainScene extends Phaser.Scene {
    
    preload() {
        this.load.image('ground','assets/ground.png');
        this.load.image('sky','assets/sky.png');
        this.load.image('block','assets/block.png');
        this.load.image('hero','assets/hero.png');

    //     this.load.spritesheet('dude', 
    //     'assets/dude.png',
    //     { frameWidth: 32, frameHeight: 48 }
    // );
    }
    
    create() {
        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'hero');
    }

    update() {

    }
}