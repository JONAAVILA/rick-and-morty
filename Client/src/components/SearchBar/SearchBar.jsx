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

   const handleSearch = (event)=>{
         if(event.key === "Enter"){
            onSearch(id)
            setExecute(!execute)
         }
         
   }

   return (
      <div className="search">
         <input className="input_search" type='search' placeholder="Press Enter" onChange={handleChange} onKeyPress={handleSearch}/>
      </div>
   );
}
