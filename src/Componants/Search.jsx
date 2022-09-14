import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { FetchData } from '../Slice/DataSlice';


const Search = () => {
    const timer = useRef(null);
    const dispatch = useDispatch();


  //  ------- For Debounce function------------

    const InputFunc = (debounceFunc, e) => {
        clearTimeout(timer);
        setTimeout(() => {
          debounceFunc(e);
        }, 1000);
      };
    
      const debounceFunc = (e) => {
        dispatch(FetchData(`name=${e.target.value}`))
      };



  return (
    <div className="d-flex flex-column align-items-center">
      <section class="form-control-sm  srch-container " style={{width:"30rem"}}>
          <input
            type="search"
            class="form-control "
            onChange={(e) => InputFunc(debounceFunc, e)}
            placeholder="Search character"
          />
        </section>
    </div>
  )
}

export default Search
