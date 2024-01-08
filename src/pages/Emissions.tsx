import { useEffect, useState } from "react";
import Card from "../components/card/Card";

interface Game {
  title: string;
  inProgress: boolean;
  image: string;
  links: {
    youtube: string;
    steam: string;
  };
}

const GAMES_COMPLETED_INITIAL_STATE: number = 12;
const GAMES_COMPLETED_INCREMENT: number = 12;

const Emissions = () => {
  const [gamesInProgress, setGamesInProgress] = useState([]);
  const [gamesCompleted, setGamesCompleted] = useState([]);

  const [cardsToShow, setCardsToShow] = useState(GAMES_COMPLETED_INITIAL_STATE);
  const [gamesCompletedAllDisplayed, setGamesCompletedAllDisplayed] =
    useState(false);

  const loadMore = () => {
    setCardsToShow(cardsToShow + GAMES_COMPLETED_INCREMENT);
  };

  useEffect(() => {
    fetch("data/games.json")
      .then((response) => response.json())
      .then((result) => {
        setGamesInProgress(result.games.inProgress);
        setGamesCompleted(result.games.completed);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (cardsToShow >= gamesCompleted.length) {
      setGamesCompletedAllDisplayed(true);
    } else {
      setGamesCompletedAllDisplayed(false);
    }
  }, [gamesCompleted.length, cardsToShow]);

  return (
    <>
      <section className="emissions__section">
        <h2>Evenements</h2>
          <div className="cards">
          </div>
      </section>
      <section className="emissions__section">
        <h2>Jeux en cours</h2>
        <div className="cards">
          {gamesInProgress.map(
            (game: Game, index) =>
              game.title && (
                <Card
                  key={game.title}
                  title={game.title}
                  links={[game.links.youtube, game.links.steam]}
                  image={game.image}
                  status="inProgress"
                  index={index}
                />
              )
          )}
        </div>
      </section>
      <section className="emissions__section">
        <h2>Jeux terminé ({gamesCompleted.length})</h2>
        <div className="cards">
          {gamesCompleted.slice(0, cardsToShow).map(
            (game: Game, index) =>
              index < cardsToShow &&
              game.title && (
                <div key={game.title}>
                  <Card
                    key={game.title}
                    title={game.title}
                    links={[game.links.youtube, game.links.steam]}
                    image={game.image}
                    status="completed"
                    index={index}
                  />
                </div>
              )
          )}
        </div>
        {!gamesCompletedAllDisplayed && (
          <button className="emissions__see-more" onClick={loadMore}>
            Voir plus
          </button>
        )}
      </section>
    </>
  );
};

export default Emissions;
