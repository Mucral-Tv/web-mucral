import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Event {
  title: string;
  image: string;
  text: string;
  games: Game[];
  slideshow: string[];
}

interface Game {
  miniature: string;
  name: string;
  image: string;
  description: string;
  link_steam: string;
}

const Event = () => {
  const params = useParams();
  
  const [event, setEvent] = useState<Event>({title: '', image: '', text: '', games: [], slideshow: []});
  const [currentGame, setCurrentGame] = useState<Game>();

  const { title, image, text, games } = event;

  useEffect(() => {
    fetch(`/data/events/${params.eventID}.json`)
      .then((response) => response.json())
      .then((result) => {
        console.log(`🚀 ~ .then ~ result:`, result);

        setEvent(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="event">
      <img className="event__image" src={`/${image}`} alt="" />
      <p className="event__description">{text}</p>
      <h2 className="event__title">{title}</h2>
      <div className="game" style={{ display: "flex" }}>
        <img
          className="game__image"
          src={`/${currentGame?.image}`}
          alt=""
        />
        <div className="game__wrapper" style={{ width: '50%' }}>
          <h2 className="game__title">{currentGame?.name}</h2>
          <p className="game__description">{currentGame?.description}</p>
            <a className="game__steam-link" href={currentGame?.link_steam} target="_blank" rel="noreferrer" style={{ display: "inline-flex" }}>
                <img src="/images/icons/steam-badge.png" alt="" />
            </a>
        </div>
      </div>
      <div className="slideshow">
        {games &&
          games.map((game) => (
            <div className={`slideshow__item ${game === currentGame ? 'slideshow__item--active' : ''}`} key={game.name} onClick={() => setCurrentGame(game)}>
              <img
                className="slideshow__image"
                src={`/${game.miniature}`}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Event;
