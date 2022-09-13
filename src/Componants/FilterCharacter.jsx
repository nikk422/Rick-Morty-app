import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusFilter, genderFilter, clearFilter } from "../Slice/DataSlice";

const FilterCharacter = () => {
  const statusArr = ["Alive", "Dead", "unknown"];
  const genderArr = ["Male", "Female", "unknown"];
  const [showFilter, SetShowFilter] = useState(false);
  const dispatch = useDispatch();
  const { byStatus, byGender } = useSelector((state) => state.chardata);


  return (
    <div
      className="border p-2   bg-dark bg-opacity-10"
      style={{ height: "fit-content" }}
    >
      <button
        onClick={() => SetShowFilter(!showFilter)}
        className="border border-dark p-1  fs-5 bg-dark text-light"
      >
        Filter <i class="fa fa-filter" aria-hidden="true"></i>
      </button>
      {showFilter && (
        <div className="d-flex flex-column gap-1 mt-3 filter-responsive">
          <strong>Filter by Status </strong>
          {statusArr.map((char) => (
            <div className="category p-1" key={char}>
              <input
                type="radio"
                name="status"
                value={char}
                checked={char === byStatus}
                onClick={() => dispatch(statusFilter(char))}
              ></input>
              <label className="lable"> {char}</label>
            </div>
          ))}
          <hr />
          <strong>Filter by Gender </strong>

          {genderArr.map((char) => (
            <div className="category p-1 " key={char}>
              <input
                type="radio"
                name="gender"
                value={char}
                checked={char === byGender}
                onClick={() => dispatch(genderFilter(char))}
              ></input>
              <label className="lable"> {char}</label>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearFilter())}
            className="btn btn-secondary btn-sm"
          >
            Clear-Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterCharacter;
