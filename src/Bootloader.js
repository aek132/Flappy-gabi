class Bootloader extends Phaser.Scene {
  constructor() {
    super("Bootloader");
  }

  preload() {
    console.log("Bootloader");
    this.load.setPath("./assets/");
  }

  create() {}
}

export default Bootloader;
