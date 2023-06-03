type MemeImage = {
  id: string;
  path: string;
  alt: string;
};

const memeImages: MemeImage[] = [
  { id: '1', path: 'https://i.imgur.com/6AgsAtM.png', alt: 'Ron Swanson "I regret nothing. The end."' },
  { id: '2', path: 'https://i.imgur.com/K7GEeyl.png', alt: 'Dissappointed Dad' },
  { id: '3', path: 'https://i.imgur.com/xXjWb89.png', alt: 'Joe Exotic "I\'m never gonna financially recover from this."' },
  { id: '4', path: 'https://i.imgur.com/9El3if0.png', alt: 'Phil Banks lecturing the Fresh Prince of Bel Air.' },
  { id: '5', path: 'https://i.imgur.com/3DTIEFg.png', alt: 'Dad wearing shirt with "Warning 0 days(s) without a dad joke.' },
  { id: '6', path: 'https://i.imgur.com/kbjqp1Y.png', alt: 'Dad and racoon drinking beers together.' },
  { id: '7', path: 'https://i.imgur.com/2sI6yDu.png', alt: 'Dad on couch staring at ceiling with tv remote in hand.' },
  { id: '8', path: 'https://i.imgur.com/vO6SFsN.png', alt: 'Danny Tanner smirking and pointing.' },
  { id: '9', path: 'https://i.imgur.com/hp9h6l2.png', alt: 'Dad standing watching news but looking thoughtful.' },
  { id: '10', path: 'https://i.imgur.com/vomb8yO.png', alt: 'Dad throwing child in air very, very high.' },
  { id: '12', path: 'https://i.imgur.com/BhQdGNQ.png', alt: 'Happy dad grilling.' },
  { id: '13', path: 'https://i.imgur.com/ZafGQDO.png', alt: 'Tim "The Tool Man" Taylor posing with a hammer.' },
  { id: '14', path: 'https://i.imgur.com/T8eHLkJ.png', alt: 'Dad in aviator with cool dog in sunglasses.' },
  { id: '15', path: 'https://i.imgur.com/be00a0C.png', alt: 'Early 90s dad with sweet shades grilling.' },
  { id: '16', path: 'https://i.imgur.com/zvteKmu.png', alt: 'Two dads golfing.' },
  { id: '17', path: 'https://i.imgur.com/q7B4LSz.png', alt: 'Dad mowing with a tornado in the background.' },
  { id: '18', path: 'https://i.imgur.com/I3uXcLR.png', alt: 'Hank Hill "Why would anyone do drugs when they could just mow a lown?"' },
  { id: '19', path: 'https://i.imgur.com/JjzYBO5.png', alt: 'Bob Belcher giving solid advice to Tina.' }
];

export default memeImages;
export type { MemeImage };