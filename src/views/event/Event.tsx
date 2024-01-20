import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { EventDetails, EventGame } from "../../models/models";
import NoPage from "../noPage/NoPage";
import "./event.scss";
import Slideshow from "../../components/slideshow/Slideshow";
import Loading from "../../components/loading/Loading";

const Event = () => {
  const params = useParams();
  const { data, loading, error } = useFetch<EventDetails>(
    `/data/events/${params.eventID}.json`
  );
  const [currentGame, setCurrentGame] = useState<EventGame>();

  useEffect(() => {
    if (data) {
      setCurrentGame(data.games[0]);
    }
  }, [data]);

  if (error) {
    console.log(error);
    return <NoPage></NoPage>;
  }

  if (loading) {
    return <Loading />;
  }

  const { title, image, text, games } = data;

  return (
    <div className="event">
      <img className="event__image" src={`/${image}`} alt="" />
      <p className="event__description">{text}</p>
      <h2 className="event__title">{title}</h2>
      <div className="game" style={{ display: "flex" }}>
        <img className="game__image" src={`/${currentGame?.image}`} alt="" />
        <div className="game__wrapper" style={{ width: "50%" }}>
          <h2 className="game__title">{currentGame?.name}</h2>
          <p className="game__description">{currentGame?.description}</p>
          <a
            className="game__steam-link"
            href={currentGame?.link_steam}
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex" }}
          >
            <img src="/images/icons/steam-badge.png" alt="" />
          </a>
        </div>
      </div>
      <Slideshow
        gameList={games}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
      ></Slideshow>
    </div>
  );
};

export default Event;
