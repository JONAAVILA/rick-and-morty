import { useState } from "react";
import "./SearchModule.css";

export default function SearchBar(props) {
   const [id,setId] = useState("");
   const { onSearch } = props;
   const [execute, setExecute] = useState(false);

   const handleChange = (event)=>{
         const valueEvent = parseInt(event.target.value)
         if(valueEvent <= 826 && valueEvent > 0){
            setId(event.target.value);
         } else {
            setId(""); 
            event.target.value = ""
         }  
   }

   const handleSearch = ()=>{
         onSearch(id)
         setExecute(true)
   }

   return (
      <div>
         <input className="input_search" type='search' onChange={handleChange}/>
         <button className="button_search" onClick={handleSearch} >Agregar</button>
      </div>
   );
}
