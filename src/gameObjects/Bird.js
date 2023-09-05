export default class Bird extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type) {
    super(scene, x, y, type);
    scene.add.existing(this);

    this.scene.physics.world.enable(this);
    this.body.setCollideWorldBounds(true);

    this.setScale(0.19);

    this.jumpVelocity = -450;
  }

  jump() {
    this.body.setVelocityY(this.jumpVelocity);
  }
}
