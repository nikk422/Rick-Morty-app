import React,{useState} from "react";
import CharacterListing from "../Componants/CharacterListing";
import FilterCharacter from "../Componants/FilterCharacter";
import Pagination from "../Componants/Pagination";

const Home = () => {
  const [pageNo, setPageNo] = useState(1)
  return (
    <div> 
      <section className="d-flex filter-responsive">
        <FilterCharacter pageNo={pageNo}/>
        <CharacterListing />
      </section>
      <Pagination props={{pageNo, setPageNo}}/>
    </div>
  );
};

export default Home;
