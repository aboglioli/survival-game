/* globals __DEV__ */
import Phaser from 'phaser';
import GameObject from '../sprites/GameObject';
import Map from '../objects/Map';

import {
  setResponsiveWidth
} from '../utils';

export default class extends Phaser.State {
  init() {}
  preload() {}

  create() {
    let banner = this.add.text(this.game.world.centerX, this.game.height -
      30, 'Survive.js');
    banner.font = 'Nunito';
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.anchor.setTo(0.5);

    this.map = new Map(this.game);

    this.addObjects();
  }

  render() {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.gobject, 32, 32);
    }
  }

  addObjects() {
    for (var i = 0; i < 5; i++) {
      let [rndX, rndY] = this.map.randomPosition();
      let gobject = new GameObject({
        game: this.game,
        x: rndX,
        y: rndY,
        asset: 'civilian'
      });

      setResponsiveWidth(gobject, 15, this.game.world);
      this.game.add.existing(gobject);
    }
  }
}
