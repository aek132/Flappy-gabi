import Bootloader from "./Bootloader.js";
import Menu from "./scenes/menu.js";

const config = {
  title: "flappy_gabi",
  type: Phaser.AUTO,
  scale: {
    parent: "phaser_container",
    width: 600,
    height: 500,
  },
  backgroundColor: "#95afc0",
  pixelArt: true,
  scene: [Bootloader, Menu],
};

new Phaser.Game(config);
