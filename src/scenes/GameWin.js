export default class GameWin extends Phaser.Scene {
  constructor() {
    super("GameWin");
  }

  create() {
    const centerW = this.scale.width / 2;
    const centerH = this.scale.height / 2;

    var bgWin = this.add.image(0, 0, "backgroundWin");
    // bgWin.setScale(
    //   this.scale.width / bgWin.width,
    //   this.scale.height / bgWin.height
    // );
  }
}
