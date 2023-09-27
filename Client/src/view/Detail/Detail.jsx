import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Detail.css';


const Detail = ()=>{
    const {id} = useParams();
    const [character, setCharacter] = useState({}) 
    
    useEffect(() => {
            axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
               if (data.name) {
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [id]);
    return(
        <div className="Detail_conteiner">
            
           <div className="box_name">
             <h1>{character.name}</h1>
           </div>
            
            <img src={character.image} alt={character.name}/>
         
            
        </div>
    );      
}
export default Detail;