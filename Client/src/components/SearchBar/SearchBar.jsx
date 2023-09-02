import { useState } from "react";
import "./SearchModule.css";

export default function SearchBar(props) {
   const [id,setId] = useState("");
   const { onSearch } = props;

   const handleChange = (event)=>{
         if(parseInt(event.target.value)<=826){
            setId(event.target.value);
         } else {
            setId(""); 
            event.target.value = ""
         }
   }
   

   return (
      <div>
         <input className="input_search" type='search' onChange={handleChange}/>
         <button className="button_search" onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
