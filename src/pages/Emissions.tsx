import { Link } from "react-router-dom";

const Emissions = () => {

  return (
    <section className="emissions">
      <Link to="/emissions/events">
        <div className="card-menu">
          <img className="card-menu__image" src="/images/inside.webp" alt="" />
          <h3 className="card-menu__title">Evenements</h3>
        </div>
      </Link>
      <Link to="/emissions/games">
        <div className="card-menu">
          <img className="card-menu__image" src="/images/inside.webp" alt="" />
          <h3 className="card-menu__title">Gaming</h3>
        </div>
      </Link>
    </section>
  );
};

export default Emissions;
