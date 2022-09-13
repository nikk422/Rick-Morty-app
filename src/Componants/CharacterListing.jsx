import { Link } from "react-router-dom";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeToFavorite, FetchData } from "../Slice/DataSlice";
import { useEffect } from "react";

const CharacterListing = ({ prop }) => {
  const dispatch = useDispatch();

  const {
    data: { results },
    byGender,
    favouritList,
    loading,
    byStatus,
    bySearch,
  } = useSelector((state) => state.chardata);

    // --------For Calling Data with useEffect------------


  useEffect(() => {
    dispatch(FetchData(""));
  }, []);

  const newData = prop !== undefined ? prop : results;

  // --------For filter function------------

  const filterFunc = () => {
    let sortData = newData;

    if (byStatus) {
      sortData = sortData?.filter((i) => byStatus.includes(i.status));
    }
    if (byGender) {
      sortData = sortData?.filter((i) => byGender.includes(i.gender));
    }
    return sortData;
  };

  return (
    <>
      <main className="d-flex flex-column container z-index-1">
        <Search />
        {loading ? (
          <h2 className="text-center">Loading...</h2>
        ) : (
          <div className="character-contain d-flex flex-row justify-content-center">
            {filterFunc().map((item) => {
              let updatedTime = item.created.replace("T", "/").slice(0, 19);

              if (item.name.toLowerCase().includes(bySearch.toLowerCase())) {
                return (
                  <div
                    className="card"
                    style={{ width: "18rem", height: "fit-content" }}
                  >
                    <div
                      className="card  shadow position-relative bg-dark bg-opacity-10"
                      key={item}
                    >
                      <Link to={`/charDetail/${item.id}`}>
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                      <div className="fs-5 fw-bold mb-2 p-1">{item.name}</div>
                      <div className="d-flex flex-column gap-1">
                        <div className="p-1 fs-6">
                          <strong>Created </strong>: {updatedTime}
                        </div>
                        <div className="p-1 fs-6">
                          <strong>Origin </strong> :- {item.origin.name}
                        </div>
                        <button className="position-absolute top-0 end-0 btn btn-info">
                          {item.status}
                        </button>
                      </div>
                      <section className="d-grid gap-2">
                        {favouritList?.some((i) => i.id === item.id) ? (
                          <button
                            onClick={() => dispatch(removeToFavorite(item))}
                            className="btn btn-dark"
                          >
                            <i
                              style={{ fontSize: "1.3rem", color: "red" }}
                              className="fa fa-heart "
                            ></i>
                            REMOVE FROM FAVOURIT
                          </button>
                        ) : (
                          <button
                            onClick={() => dispatch(addToFavorite(item))}
                            className="btn btn-dark"
                          >
                            <i
                              style={{ fontSize: "1.3rem" }}
                              className="fa fa-heart"
                            ></i>
                            ADD TO FAVOURIT
                          </button>
                        )}
                      </section>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default CharacterListing;
