import './card.scss';
import youtubeIcon from "/images/icons/youtube.png";
import steamIcon from "/images/icons/steam.png";
import { Link } from "react-router-dom";
import { CardStatus, Links } from "../../models/models";

interface CardProps {
  status?: CardStatus;
  title: string;
  image: string;
  links?: Links;
  index: number;
  type: "event" | "game";
  link?: string;
}

const linkRender = (links: Links) => {
  return (
    <>
      {links.youtube && (
        <a
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="card__link"
        >
          <img src={youtubeIcon} alt="youtube" />
        </a>
      )}
      {links.steam && (
        <a
          href={links.steam}
          target="_blank"
          rel="noopener noreferrer"
          className="card__link"
        >
          <img src={steamIcon} alt="steam" />
        </a>
      )}
    </>
  );
};

const Card = ({ title, image, links, status, link }: CardProps) => {
  const cardContent = () => {
    return (
      <article
        className={`card ${status === "completed" ? "card--completed" : ""}`}
      >
        <div className="card__image">
          <img loading="lazy" src={`/${image}`} alt={title} />
        </div>
        {(title || links) && (
          <div className="card__content">
            <h3>{title}</h3>
            <div className="card__links">{links && linkRender(links)}</div>
          </div>
        )}
      </article>
    );
  };

  return (
    <>
      {link ? (
        <Link to={`/emissions/events/${link}`}>{cardContent()}</Link>
      ) : (
        cardContent()
      )}
    </>
  );
};

export default Card;
