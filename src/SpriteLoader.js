const assetsDir = './assets';
const spritesDir = assetsDir + '/sprites';

// add sprites from sprites/ folder
const sprites = [
  {name: 'civilian', file: 'civilian_walk.png'}
];

export default function(loadCallback) {
  sprites.map((sprite) => {
    loadCallback(sprite.name, spritesDir + '/' + sprite.file);
  });
}
