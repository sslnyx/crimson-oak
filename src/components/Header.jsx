import React from "react";
import cover from "../assets/img/header/cover.svg";
import logo from "../assets/img/header/co-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const navList = [
    {
      url: "/neighbourhood",
      item: "Neighbourhood",
    },
    {
      url: "/community",
      item: "Community",
    },
    {
      url: "/amenity",
      item: "Amenity",
    },
    {
      url: "/team",
      item: "Team",
    },
    {
      url: "/contact",
      item: "Contact",
    },
  ];
  return (
    <header className="relative">
      <img
        className="absolute top-0 left-0 w-full h-auto lg:h-[80px] object-cover pointer-events-none"
        src={cover}
      />

      <div className="container h-[100px] flex items-end">
        <div className="flex w-full pb-3 gap-5 items-center">
          <Link to="/#">
            <img className="w-[200px]" src={logo} />
          </Link>

          <div className="flex-1"></div>
          <nav className="gap-5 items-center hidden md:flex">
            <ul className="flex gap-5">
              {navList.map(({ url, item }, i) => (
                <li key={i}>
                  <Link to={url}>{item}</Link>
                </li>
              ))}
            </ul>
            <Link to="/register" className="bg-primary text-white py-1 px-3">
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
