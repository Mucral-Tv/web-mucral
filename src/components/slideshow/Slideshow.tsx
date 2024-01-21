import { EventGame } from "../../models/models";
import "./slideshow.scss";

interface SlideshowProps {
  gameList: EventGame[];
  currentGame: EventGame | undefined;
  setCurrentGame: (game: EventGame) => void;
}

const Slideshow = ({
  gameList,
  currentGame,
  setCurrentGame,
}: SlideshowProps) => {
  return (
    <div className="slideshow">
      {gameList &&
        gameList.map((game: EventGame) => (
          <div
            className={`slideshow__item ${
              game === currentGame ? "slideshow__item--active" : ""
            }`}
            key={game.name}
            onClick={() => setCurrentGame(game)}
          >
            <img
              className="slideshow__image"
              src={`/${game.miniature}`}
              alt=""
            />
          </div>
        ))}
    </div>
  );
};

export default Slideshow;
