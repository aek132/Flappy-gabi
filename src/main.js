import Game from "./scenes/Game.js";
import Bootloader from "./Bootloader.js";
import Menu from "./scenes/Menu.js";

const config = {
  title: "flappy_gabi",
  type: Phaser.AUTO,
  scale: {
    parent: "phaser_container",
    width: 800,
    height: 600,
  },
  backgroundColor: "#95afc0",
  pixelArt: true,
  physics: {
    default: "arcade", // El motor de física predeterminado
    /* arcade: {
      gravity: { y: 300 }, // Gravedad vertical global
      debug: false, // Habilitar o deshabilitar el modo de depuración de física
    }, */
  },
  scene: [Bootloader, Menu, Game],
};

new Phaser.Game(config);
