import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <header className="position-sticky top-0 p-1 mb-2 bg-dark bg-gradient z-index-2">
      <nav className="navbar">
        <section className="container-fluid">
          <Link to="/">
            <h3 className="rick-morty">Rick And Morty</h3>
          </Link>
          <Search />
          <Link to="favourit">
            <i
              style={{ fontSize: "2rem", color:"white" }}
              className="fa fa-heart "
            ></i>
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
