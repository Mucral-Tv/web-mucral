import { useEffect, useState } from "react";
import { CardContent, CardStatus, CardType } from "../../models/models";
import Loading from "../loading/Loading";
import Card from "../card/Card";
import "./cardList.scss";
import Button from "../button/Button";

const CARD_INITIAL_STATE: number = 12;
const CARD_INCREMENT: number = 12;

const CardsList = ({
  list,
  type,
  title,
  loading,
  status,
}: {
  list: CardContent[];
  type: CardType;
  title: string;
  loading: boolean;
  status?: CardStatus;
}) => {
  const [cardsToShow, setCardsToShow] = useState(CARD_INITIAL_STATE);
  const [cardsAllDisplay, setCardsAllDisplay] = useState<boolean>(false);

  const [listSorted, setListSorted] = useState<CardContent[]>([]);

  useEffect(() => {
    if (status === 'soon') {
      const sortedList = list.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setListSorted(sortedList);
    } else {
      setListSorted(list);
    }
  }, [list, status]);

  const loadMore = () => {
    setCardsToShow(cardsToShow + CARD_INCREMENT);
  };

  useEffect(() => {
    if (cardsToShow >= list.length) {
      setCardsAllDisplay(true);
    } else {
      setCardsAllDisplay(false);
    }
  }, [list.length, cardsToShow]);

  return (
    <section className="card-list">
      <h2 className="card-list__title">{status === 'completed' || status === 'soon' ? `${title} (${list?.length})` : title}</h2>
      {loading && <Loading />}
      <div className="card-list__wrapper">
      {listSorted.slice(0, cardsToShow).map((item: CardContent, index) => {
        return (
          <Card
            // todo: fix key
            key={item.id || item.title}
            title={item.title}
            links={item.links}
            image={item.image}
            index={index}
            type={type}
            link={item.subEvents}
            status={status}
          />
        );
      })}
      </div>
     

      {!cardsAllDisplay && (
        <Button text="Voir plus" onClick={loadMore} className="" />
      )}
    </section>
  );
};

export default CardsList;
