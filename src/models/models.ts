export interface Game {
    title: string;
    inProgress: boolean;
    image: string;
    links: {
      youtube: string;
      steam: string;
    };
  }

  export type Links = {
    youtube?: string;
    steam?: string;
  };
  