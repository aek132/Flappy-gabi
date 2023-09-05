class Bootloader extends Phaser.Scene {
  constructor() {
    super("Bootloader");
  }

  preload() {
    console.log("Bootloader");
    this.load.setPath("./assets/");

    this.load.image("start", "start.png");
    this.load.image("backgroundMenu", "backgroundMenu.png");
    this.load.image("bird", "bird.png");
    this.load.image("gabi", "gabi.png");
    this.load.image("backgroundWin", "backgroundWin.jpg");
    this.load.image("backgroundMiddle", "backgroundMiddle.jpg");
    this.load.image("backgroundGameOver", "backgroundGameOver.jpg");
    this.load.atlas("flue", "flue.png", "flue-atlas.json");
  }

  create() {
    this.scene.start("Menu");
  }
}

export default Bootloader;
