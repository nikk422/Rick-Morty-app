import React from "react";
import CharacterListing from "../Componants/CharacterListing";
import FilterCharacter from "../Componants/FilterCharacter";
import Pagination from "../Componants/Pagination";

const Home = () => {
  return (
    <div> 
      <section className="d-flex filter-responsive">
        <FilterCharacter />
        <CharacterListing />
      </section>
      <Pagination />
    </div>
  );
};

export default Home;
