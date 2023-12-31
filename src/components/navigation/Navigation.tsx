import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/assets/img/logo.png";
import DiscordIcode from "@/assets/img/icons/discord.png";
import TwitchIcon from "@/assets/img/icons/twitch.png";
import youtubeIcon from "@/assets/img/icons/youtube.png";
import twiterIcon from "@/assets/img/icons/twitter.png";
import githubIcon from "@/assets/img/icons/github.png";
import humbleIcon from "@/assets/img/icons/humble.png";

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
              <Link to="/">Live</Link>
            </li>
            <li>
              <Link to="/biographie">Biographie</Link>
            </li>
            <li>
              <Link to="/configuration">Configuration</Link>
            </li>
            <li>
              <Link to="/emissions">Emissions</Link>
            </li>
          </ul>
          <ul className="navigation__social">
            <li>
              <a href="https://www.twitch.tv/mucral_tv" title="Twitch">
                <img src={TwitchIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCRsw7eV9gFRV4b9t1Lg2GPw"
                title="Youtube"
              >
                <img src={youtubeIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Mucral" title="Twitter">
                <img src={twiterIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/g9prZQd" title="Discord">
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
              <a href="https://github.com/Mucral-Tv" title="Github">
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
