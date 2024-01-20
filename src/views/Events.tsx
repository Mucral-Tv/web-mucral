import useFetch from "../hooks/useFetch";
import NoPage from "./NoPage";
import CardsList from "../components/cardList/CardList";
import { CardList } from "../models/models";

const Events = () => {
  const { data, loading, error } = useFetch<CardList>("/data/events.json");

  if (error) {
    console.log(error);
    return <NoPage></NoPage>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <CardsList
        list={data.inProgress}
        type="event"
        title="Évènement en cours"
        loading={loading}
      />

      <CardsList
        list={data.soon}
        type="event"
        title="Évènement a venir"
        loading={loading}
      />

      <CardsList
        list={data.completed}
        type="event"
        title="Évènement terminé"
        loading={loading}
      />
    </>
  );
};

export default Events;
