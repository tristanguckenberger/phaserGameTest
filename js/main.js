var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('block', 'assets/block.png');
    this.load.image('hero', 'assets/hero.png');
}

var platforms;
var cursors;
var players;

function create () {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 600, 'ground').setScale(4).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');


    player = this.physics.add.sprite(100, 450, 'hero').setScale(1.5);

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);

    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
}

function update (delta)
{
   if(this.key_A.isDown) {
       this.image.x--;
   }
}