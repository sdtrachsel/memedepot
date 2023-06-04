interface MemeImage {
  id: string;
  path: string;
  alt: string;
};

interface SavedMemesList{
  savedMemes: SavedMeme[]
}

interface Joke {
  joke: string;
}

interface SavedMeme extends Joke {
  image: string;
  id: string;
  favorite: boolean;
}

export type {Joke, MemeImage, SavedMeme, SavedMemesList}