import useFetch from "../../hooks/useFetch";
import NoPage from "../noPage/NoPage";
import CardsList from "../../components/cardList/CardList";
import { CardList } from "../../models/models";
import Loading from "../../components/loading/Loading";

const Games = () => {
  const {data, loading, error} = useFetch<CardList>("/data/games.json");

  if(error){
    console.log(error);
    return <NoPage></NoPage>;
  }

  if(!data) {
    return <Loading />;
  }

  
  return (
    <>
       <CardsList
        list={data.inProgress}
        type="game"
        title="Gaming en cours"
        status="inProgress"
        loading={loading}
      />

      <CardsList
        list={data.soon}
        type="game"
        title="Gaming a venir"
        status="soon"
        loading={loading}
      />

      <CardsList
        list={data.completed}
        type="game"
        title="Gaming terminé"
        loading={loading}
        status="completed"
      />
    </>
  );
};

export default Games;
