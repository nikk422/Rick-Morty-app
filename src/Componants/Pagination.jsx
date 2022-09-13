import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Slice/DataSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const {data:{info}}= useSelector((state) => state.chardata);


// -----------For pagination--------------

  useEffect(() => {
    if(info?.pages <= 42){
      dispatch(FetchData(pageNo));
    }
  }, [pageNo]);


  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center m-2">

          { info?.prev &&
            <li className="page-item">
              <button
                onClick={() => setPageNo(pageNo - 1)}
                class="page-link bg-info text-dark"
              >
                Previous
              </button>
            </li>
          }
          <li className="page-item">
            <p class="page-link bg-light ">{pageNo}</p>
          </li>
        
          { info?.next &&
            <li className="page-item">
              <button
                onClick={() => setPageNo(pageNo + 1)}
                class="page-link bg-info text-dark"
              >
                Next
              </button>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
