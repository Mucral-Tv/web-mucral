import youtubeIcon from "@/assets/img/icons/youtube.png";
import steamIcon from "@/assets/img/icons/steam.png";

type CardStatus = "inProgress" | "completed";

interface CardProps {
  status?: CardStatus;
  title: string;
  image: string;
  links?: string[];
  index: number;
}

const linkRender = (link: string) => {
  if (link.includes("youtube")) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <img src={youtubeIcon} alt="youtube" />
      </a>
    );
  } else if (link.includes("steam")) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <img src={steamIcon} alt="steam" />
      </a>
    );
  }
};

const Card = ({ title, image, links, status }: CardProps) => {

  return (
    <article
      className={`card ${status === "completed" ? "card--completed" : ""}`}
    >
      <div className="card__image">
        <img loading="lazy" src={image} alt={title} />
      </div>
      {(title || links) && (
        <div className="card__content">
          <h3>{title}</h3>
          <div className="card__links">{links && links.map(linkRender)}</div>
        </div>
      )}
    </article>
  );
};

export default Card;
