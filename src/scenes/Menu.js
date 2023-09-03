export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  init(data) {}

  preload() {
    console.log("Menu");
  }

  create() {
    const centerW = this.scale.width / 2;
    const centerH = this.scale.height / 2;

    this.backgroundMenu = this.add.image(centerW, centerH, "backgroundMenu");
    this.backgroundMenu.setScale(
      this.scale.width / this.backgroundMenu.width,
      this.scale.height / this.backgroundMenu.height
    );

    this.start = this.add.image(centerW, centerH, "start").setScale(0.5);

    this.start.setInteractive();

    this.start.on("pointerdown", () => {
      this.scene.launch("Game", centerH);
      this.start.destroy();
    });
  }
}
