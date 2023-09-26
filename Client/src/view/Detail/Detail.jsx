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
            <div>
               <h1>{character.name}</h1>
            </div>
            <div className="box_detail">
               <div>
                  <h2>Status: {character.status}</h2>
                  <h2>Location: {character.location}</h2>
               </div>
               <div>
                  <img src={character.image} alt={character.name}/>
               </div>
               <div>
                  
                  <h2>Species: {character.species}</h2>
                  <h2>Genger: {character.gender}</h2>
               </div>
            </div>
            
        </div>
    );      
}
export default Detail;