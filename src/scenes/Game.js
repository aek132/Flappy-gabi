import Bird from "../gameObjects/Bird.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
    this.score = 0;
    this.hasPassedPipeThisFrame = false;
  }

  init(data) {
    this.data.set("centerH", data);
  }

  preload() {
    console.log("Game");
  }

  create() {
    const centerW = this.scale.width / 2;
    const centerH = this.scale.height / 2;

    this.background = this.add.image(centerW, centerH, "backgroundMiddle");
    this.background.setScale(
      this.scale.width / this.background.width,
      this.scale.height / this.background.height
    );

    this.bird = new Bird(
      this,
      this.scale.width / 2 - 100,
      this.scale.height / 2,
      "gabi"
    );

    // Movimiento del pajaro
    this.input.keyboard.on("keydown-SPACE", this.jump, this);
    this.input.on("pointerdown", this.jump, this);

    // Tubos
    this.tubos = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });

    this.pipeOffset = 300;
    this.generateFirstPipePair();

    // Colision pajaro-tubo
    this.physics.add.collider(this.bird, this.tubos, this.gameOver, null, this);

    // Score
    this.scoreText = this.add.text(this.scale.width / 2, 50, "0", {
      fontSize: "32px",
      fill: "#fff",
    });
    this.scoredThisFrame = false;
  }

  update() {
    this.tubos.children.iterate((pipe) => {
      if (pipe && pipe.x < -pipe.width) {
        pipe.destroy();
        this.scoredThisFrame = true;
      }
    });

    const lastPipe = this.tubos.getChildren()[this.tubos.getLength() - 1];

    if (lastPipe && lastPipe.x < this.scale.width / 2) {
      this.generatePipes(this.scale.width);
    }

    // Comprobar y sumar Score
    const tubosArray = this.tubos.getChildren();
    const birdX = this.bird.x;

    for (let i = 0; i < tubosArray.length; i += 2) {
      const upperPipe = tubosArray[i];
      const lowerPipe = tubosArray[i + 1];

      // Verifica si el pájaro ha pasado por los tubos
      if (
        upperPipe.x + upperPipe.width < birdX &&
        !upperPipe.scored &&
        !lowerPipe.scored
      ) {
        upperPipe.scored = true;
        lowerPipe.scored = true;
        this.score += 1;
        this.scoreText.setText(this.score);
        this.fondoDespuesTubo();
      }
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

    this.tubos.getChildren()[0].scored = false;
  }

  gameOver() {
    this.scene.start("GameOver");
  }

  jump() {
    this.bird.jump();
  }

  fondoDespuesTubo() {
    this.background.setTexture("backgroundWin");

    this.time.delayedCall(
      500,
      () => this.background.setTexture("backgroundMiddle"),
      [],
      this
    );
  }
}
