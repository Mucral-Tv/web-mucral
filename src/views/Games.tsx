import useFetch from "../hooks/useFetch";
import NoPage from "./NoPage";
import CardsList from "../components/cardList/CardList";
import { CardList } from "../models/models";

const Games = () => {
  const {data,loading,error} = useFetch<CardList>("/data/games.json");

  if(error){
    console.log(error);
    return <NoPage></NoPage>;
  }

  if(!data) {
    return <p>Loading...</p>;
  }

  
  return (
    <>
       <CardsList
        list={data.inProgress}
        type="game"
        title="Gaming en cours"
        loading={loading}
      />

      <CardsList
        list={data.soon}
        type="game"
        title="Gaming a venir"
        loading={loading}
      />

      <CardsList
        list={data.completed}
        type="game"
        title="Gaming terminé"
        loading={loading}
      />
    </>
  );
};

export default Games;
