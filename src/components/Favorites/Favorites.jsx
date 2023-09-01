import { useSelector, useDispatch } from "react-redux"
import Card from "../Card";
import { orderCards, filterCards } from "../../Redux/Actions";
import { useState } from "react";


const Favorites = ({onClose})=>{
    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux);
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
        setAux(!aux)
    }
    
    return(
        <>
            <select onChange={handleOrder}>
                <option value={"A"}>Ascendente</option>
                <option value={"D"}>Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value={"Sellecionar"}>Sellecionar</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Famale</option>
                <option value={"Genderless"}>Genderless</option>
                <option value={"unknown"}>unknown</option>
            </select>
            {myFavorites.map(char => {
                return (
                    <Card
                        key={char.id}      
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                        onClose={onClose}
                     />
                )
            })}
        </>
    )
}

export default Favorites;