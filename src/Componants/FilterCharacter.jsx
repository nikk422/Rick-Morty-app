import { useState } from "react";
import { useDispatch } from "react-redux";
import {  FetchData } from "../Slice/DataSlice";


const FilterCharacter = ({pageNo}) => {
  const statusArr = ["Alive", "Dead", "unknown"];
  const genderArr = ["Male", "Female", "unknown"];
  const [showFilter, SetShowFilter] = useState(false);
  const [category,setCategory] = useState({byStatus:"",byGender:""});
  const dispatch = useDispatch();


  return (
    <div
      className="border p-1 m-1  filter-sticky"
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
                checked={char === category.byStatus}
                onClick={() => {
                  setCategory({...category,byStatus: char})
                  dispatch(FetchData(`page=${pageNo}&status=${char}&gender=${category.byGender}`))}}
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
                checked={char === category.byGender}
                onClick={() => {
                  setCategory({...category,byGender: char})
                  dispatch(FetchData(`page=${pageNo}&gender=${char}&status=${category.byStatus}`))}}
              ></input>
              <label className="lable"> {char}</label>
            </div>
          ))}
          <button
            onClick={() => {
              setCategory({byGender:"" ,byStatus:""})
              dispatch(FetchData(`page=${pageNo}`))}}
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
