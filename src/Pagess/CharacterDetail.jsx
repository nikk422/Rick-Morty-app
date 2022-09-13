import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, FetchData, removeToFavorite } from "../Slice/DataSlice";

const CharacterDetail = () => {
  const dispatch = useDispatch();
  const {
    data: { results },
    favouritList,
  } = useSelector((state) => state.chardata);


  // --------For Calling Data with useEffect------------

  useEffect(() => {
    dispatch(FetchData());
  }, []);

  const { characterId } = useParams();

  // -------For Checking useParams and Character id------------

  const charData = results.find((i) => i.id === parseInt(characterId));

  return (
    <>
      <h1 className="text-center mt-5" style={{ textDecoration: "underline" }}>
        Character-detail{" "}
      </h1>
      <main className="character-contain   flex-row justify-content-center container ">
        <div
          className="card mt-4 "
          style={{ width: "18rem", height: "fit-content" }}
        >
          <section>
            <img src={charData?.image} className="img-fluid" alt="logo" />
            <h3>{charData?.name}</h3>
          </section>
          <div className="d-flex flex-column gap-2 p-2">
            <section>
              <strong>Gender </strong>:- {charData?.gender}
            </section>
            <section>
              <strong>Location </strong>:- {charData?.location.name}
            </section>
            <section>
              <strong>Origin </strong>: - {charData?.origin.name}
            </section>
            <section>
              <strong>Species </strong>: - {charData?.species}
            </section>
          </div>
          <button className="position-absolute top-0 end-0 btn btn-info">
            {charData?.status}
          </button>
          <section className="d-grid gap-2">
            {favouritList?.some((i) => i.id === charData?.id) ? (
              <button
                onClick={() => dispatch(removeToFavorite(charData))}
                className="btn btn-dark"
              >
                <i
                  style={{ fontSize: "1.3rem", color: "red" }}
                  className="fa fa-heart "
                ></i>{" "}
                REMOVE FROM FAVOURIT
              </button>
            ) : (
              <button
                onClick={() => dispatch(addToFavorite(charData))}
                className="btn btn-dark"
              >
                <i style={{ fontSize: "1.3rem" }} className="fa fa-heart"></i>{" "}
                ADD TO FAVOURIT
              </button>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default CharacterDetail;
