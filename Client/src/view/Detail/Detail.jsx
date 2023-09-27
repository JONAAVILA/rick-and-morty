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
            
           <div className="box_data">
               <div className="data_detail">
                  <div>
                     <h1>{character.name}</h1>
                     <h4>Status: {character.status}</h4>
                     <h4>Gender: {character.gender}</h4>
                     <h4>Species: {character.species}</h4>
                     <h4>Origin: {character.origin ? character.origin.name : 'Unknown'}</h4>
                     <h4>Location: {character.location ? character.location.name : 'Unknown'}</h4>
                  </div>
                  <div>
                     <img className="img_detail" src={character.image} alt={character.name}/>
                  </div>
               </div>

           </div>
            
            <img className="img_background" src={character.image} alt={character.name}/>
         
            
        </div>
    );      
}
export default Detail;