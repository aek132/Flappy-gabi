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
    this.load.atlas("flue", "flue.png", "flue-atlas.json");
  }

  create() {
    this.scene.start("Menu");
    // this.scene.launch("Game");
  }
}

export default Bootloader;
