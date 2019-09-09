import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import PlayScene from './scenes/PlayScene';
import UIScene from './scenes/UIScene';
import OverScene from './scenes/OverScene';
import config from './config/default';

class Game extends Phaser.Game {
    constructor(config, height, width) {
      super({...config, height, width, type: Phaser.AUTO,
        scene: [BootScene, TitleScene, PlayScene, UIScene, OverScene],
        scale: {mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, parent: 'game-container', height: 240, width: 240}});
    }
}

const game = new Game(config, 800, 600);
