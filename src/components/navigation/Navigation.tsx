import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navigation.scss";
import Logo from "/logo.png";
import DiscordIcode from "/images/icons/discord.png";
import TwitchIcon from "/images/icons/twitch.png";
import youtubeIcon from "/images/icons/youtube.png";
import twiterIcon from "/images/icons/twitter.png";
import githubIcon from "/images/icons/github.png";
import humbleIcon from "/images/icons/humble.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={open ? "navigation open" : "navigation"}>
        <div className="navigation__logo">
          <Link to="/">
            <img src={Logo} alt="Mucral Logo" />
          </Link>
        </div>
        <div className="navigation__hamburger" onClick={() => setOpen(!open)}>
          <div className="hamburger__icon-left"></div>
          <div className="hamburger__icon-right"></div>
        </div>
        <div className="navigation__menu">
          <ul className="navigation__items">
            <li>
              <NavLink to="/">Live</NavLink>
            </li>
            <li>
              <NavLink to="/biographie">Biographie</NavLink>
            </li>
            <li>
              <NavLink to="/configuration">Configuration</NavLink>
            </li>
            <li>
              <NavLink to="/emissions">émissions</NavLink>
            </li>
            <li>
              <NavLink to="#" style={{color: 'grey', cursor: 'unset'}}>Giveways</NavLink>
            </li>
            <li>
              <NavLink to="#" style={{color: 'grey', cursor: 'unset'}}>Animés</NavLink>
            </li>
          </ul>
          <ul className="navigation__social">
            <li>
              <a
                target="_blank"
                href="https://www.twitch.tv/mucral_tv"
                title="Twitch"
              >
                <img src={TwitchIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCRsw7eV9gFRV4b9t1Lg2GPw"
                title="Youtube"
              >
                <img src={youtubeIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/Mucral"
                title="Twitter"
              >
                <img src={twiterIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://discord.com/invite/g9prZQd"
                title="Discord"
              >
                <img src={DiscordIcode} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.humblebundle.com/membership?refc=ftd2AI"
                title="Humble"
              >
                <img src={humbleIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/Mucral-Tv"
                title="Github"
              >
                <img src={githubIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
