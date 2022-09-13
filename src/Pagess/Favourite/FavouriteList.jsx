import React from "react";
import { useSelector } from "react-redux";
import CharacterListing from "../../Componants/CharacterListing";

const FavouriteList = () => {

  const {favouritList } = useSelector((state)=>state.chardata);
  
  return (
    <div>
      {favouritList.length !== 0 ? (
        <CharacterListing prop={favouritList} />
      ) : (
        <h2 className="text-center">No Favorite Item Here...</h2>
      )}
    </div>
  );
};

export default FavouriteList;
