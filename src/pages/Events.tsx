import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import { Links } from "../models/models";

interface Event {
  title: string;
  image: string;
  text: string;
  games: Game[];
  links: Links;
  slideshow: string[];
  id: string;
}

interface Game {
  name: string;
  image: string;
  description: string;
}

const Events = () => {
  const [eventsInProgress, setEvent] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((result) => {
        console.log(`🚀 ~ .then ~ result:`, result);

        setEvent(result.events.inProgress);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <section className="emissions__section">
        <h2>Evenements en cours</h2>
        <div className="cards">
          {eventsInProgress.map(
            (event: Event, index) =>
              event.title && (
                <Card
                  key={event.title}
                  title={event.title}
                  links={event.links}
                  image={event.image}
                  status="inProgress"
                  index={index}
                  link={event.id}
                  type="event"
                />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default Events;
