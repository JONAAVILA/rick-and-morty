import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../Redux/Actions";
import "./Favorites.css";
// import { useState } from "react";


const Favorites = ({onClose})=>{
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch();
    // const [aux, setAux] = useState(false);

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        // setAux(!aux);
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
        // setAux(!aux)
    }
    
    return(
        <div className="conteiner_fav">
            <div className="selectors">
               <select id="" onChange={handleOrder}>
                    <option value={"A"}>Ascendente</option>
                    <option value={"D"}>Descendente</option>
                </select>
                <select id="" onChange={handleFilter}>
                    <option value={"Sellecionar"}>Sellecionar</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Famale</option>
                    <option value={"Genderless"}>Genderless</option>
                    <option value={"unknown"}>unknown</option>
                </select> 
            </div>
            
            {myFavorites.map(char => {
                return (
                    <div className="card_fav">
                        <Card
                        key={char.id}      
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.gender}
                        origin={char.origin}
                        image={char.image}
                        onClose={onClose}
                        />
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Favorites;