
import youtubeIcon from "@/assets/img/icons/youtube.png";
import steamIcon from "@/assets/img/icons/steam.png";

interface CardProps {
  title: string;
  image: string;
  links: string[];
}

const Card = ({ title, image, links }: CardProps) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      {links ? (
        <div className="card__links">
          {links.map((link, index) => (
            <a href={link} key={index} target="_blank">
                <img src={youtubeIcon} />
                <img src={steamIcon}/>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default Card;
