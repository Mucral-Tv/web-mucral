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

const Emissions = () => {
  const [gamesInProgress, setGamesInProgress] = useState([]);
  const [gamesCompleted, setGamesCompleted] = useState([]);

  useEffect(() => {
    fetch("data/games.json")
      .then((response) => response.json())
      .then((result) => {
        setGamesInProgress(result.games.inProgress);
        setGamesCompleted(result.games.completed);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <section className="emissions__section">
        <h2>Evenements</h2>
      </section>
      <section className="emissions__section">
        <h2>Jeux en cours</h2>
        <div className="cards">
          {gamesInProgress.map((game: Game) => (
            game.title &&
              <div key={game.title}>
                <Card
                  key={game.title}
                  title={game.title}
                  links={[game.links.youtube, game.links.steam]}
                  image={game.image}
                  status="inProgress"
                />
              </div>
          ))}
        </div>
      </section>
      <section className="emissions__section">
        <h2>Jeux terminé ({gamesCompleted.length})</h2>
        <div className="cards">
          {gamesCompleted.map((game: Game) => (
            game.title &&
            <div key={game.title}>
              <Card
                key={game.title}
                title={game.title}
                links={[game.links.youtube, game.links.steam]}
                image={game.image}
                status="completed"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Emissions;
