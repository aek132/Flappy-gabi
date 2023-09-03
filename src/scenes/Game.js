import Bird from "../gameObjects/Bird.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init(data) {
    this.data.set("centerH", data);
  }

  preload() {
    console.log("Game");
  }

  create() {
    this.bird = new Bird(this, 100, this.data.get("centerH"), "bird");

    this.tubos = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });

    this.pipeOffset = 300;
    this.generateFirstPipePair();

    this.physics.add.collider(this.bird, this.tubos, this.gameOver, null, this);
  }

  update() {
    this.tubos.children.iterate((pipe) => {
      if (pipe && pipe.x < -pipe.width) {
        pipe.destroy();
      }
    });

    const lastPipe = this.tubos.getChildren()[this.tubos.getLength() - 1];

    if (lastPipe && lastPipe.x < this.scale.width / 2) {
      console.log("entrado para generar");
      this.generatePipes(this.scale.width);
    }
  }

  generateFirstPipePair() {
    this.generatePipes(this.scale.width + this.pipeOffset);
  }

  generatePipes(x) {
    const pipeSpacing = 300;
    const velocidadTubos = -200;

    const upperPipe = this.tubos.create(
      x,
      Phaser.Math.Between(60, 240),
      "flue",
      "flue_1"
    );
    const lowerPipe = this.tubos.create(
      x,
      upperPipe.y + pipeSpacing,
      "flue",
      "flue_2"
    );

    const pipeScale = 2;
    upperPipe.setScale(pipeScale);
    lowerPipe.setScale(pipeScale);

    upperPipe.y -= (upperPipe.height / 2) * (pipeScale - 1);
    lowerPipe.y += (lowerPipe.height / 2) * (pipeScale - 1);

    this.tubos.setVelocityX(velocidadTubos);
  }

  gameOver() {
    this.scene.launch("GameOver");
    this.scene.pause("Game");
  }
}
