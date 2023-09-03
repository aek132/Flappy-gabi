import Bird from "../gameObjects/Bird.js";

class Game extends Phaser.Scene {
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
    const centerW = this.scale.width / 2;
    const centerH = this.scale.height / 2;

    const weightFlue = centerW + 100;
    const heightFlueUp = 60;
    const heightFlueDown = this.scale.height - 60;

    this.bird = new Bird(this, 100, this.data.get("centerH"), "bird");

    this.flueUp = this.add
      .sprite(weightFlue, heightFlueUp, "flue", "flue_1")
      .setScale(2);
    this.flueDown = this.add
      .sprite(weightFlue, heightFlueDown, "flue", "flue_2")
      .setScale(2);

    let groupFlues = this.add.container(0, 0);

    groupFlues.add([this.flueUp, this.flueDown]);

    var numRand = Phaser.Math.Between(-100, 100);
    console.log(numRand);
    groupFlues.y = numRand;
  }
}

export default Game;
