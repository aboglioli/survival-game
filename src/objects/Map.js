
export default class Map {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
  }

  randomPosition() {
    return [
      this.game.rnd.integerInRange(0, this.width),
      this.game.rnd.integerInRange(0, this.height)
    ];
  }
}
