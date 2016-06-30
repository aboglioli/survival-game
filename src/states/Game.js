/* globals __DEV__ */
import Phaser from 'phaser';
import GameObject from '../sprites/GameObject';
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

    this.gobject = new GameObject({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'civilian'
    });

    setResponsiveWidth(this.gobject, 15, this.game.world);
    this.game.add.existing(this.gobject);
  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.gobject, 32, 32);
    }
  }
}
