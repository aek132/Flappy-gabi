export default class Game extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  init() {}

  create() {
    const centerW = this.scale.width / 2;
    const centerH = this.scale.height / 2;

    this.backgroundMenu = this.add.image(
      centerW,
      centerH,
      "backgroundGameOver"
    );
    this.backgroundMenu.setScale(
      this.scale.width / this.backgroundMenu.width,
      this.scale.height / this.backgroundMenu.height
    );

    this.input.on("pointerdown", () => this.scene.start("Game"), this);
  }

  update() {}
}
