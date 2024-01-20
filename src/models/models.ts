export type CardType = "game" | "event";
export type CardStatus = "inProgress" | "completed";

export type Links = {
  youtube?: string;
  steam?: string;
};

export interface CardContent {
  id?: string;
  title: string;
  text: string;
  image: string;
  links: Links;
  type: CardType;
}

export interface CardList {
  inProgress: CardContent[];
  soon: CardContent[];
  completed: CardContent[];
}

export interface Game {
  title: string;
  inProgress: boolean;
  image: string;
  links: {
    youtube: string;
    steam: string;
  };
}
export interface EventDetails {
  title: string;
  image: string;
  text: string;
  games: EventGame[];
  slideshow: string[];
}

export interface EventGame {
  miniature: string;
  name: string;
  image: string;
  description: string;
  link_steam: string;
}
