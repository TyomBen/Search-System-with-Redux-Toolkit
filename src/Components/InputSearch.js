import { useDispatch, useSelector } from "react-redux";
import { gettingData } from '../features/actions/carts';
const InputSeacrh = ({handleFolowValue}) => {
    const { initialStateValue, data } = useSelector (({carts}) => carts); //kamel karainq chgreinq useSelector 
    const dispatch = useDispatch()                                //dra poxaren destrukciyaov karainq poxanceinq mer initialState@
    const handleClick = (event) => {                             
        event.preventDefault()
        if (initialStateValue !== ''){
            try {
                dispatch (gettingData ())
            }catch (eror) {
                console.log(eror);
            }
        }
      }
    return (
      <form>
        <h1 className="title">Unsplash Images</h1>
        <input
          type="text"
          className="search-input same-style"
          onChange={handleFolowValue}
          value={initialStateValue}
          placeholder="cat"
        />
        <button className="btn same-style" type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
    );
  };
  
  export default InputSeacrh;
  