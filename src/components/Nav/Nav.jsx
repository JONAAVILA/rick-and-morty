import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./NavModule.css";

const Nav = (props)=>(
      <div className="Nav_conteiner">
            <Link to="/about">
               <button className="button">About</button>
            </Link>
            <Link to="/home">
               <button className="button">Home</button>
            </Link>
            <Link to="/favorites" >
               <button className="button">Favorites</button>   
            </Link>
               <SearchBar onSearch={props.onSearch}/>
         <div>
               <button className="button" onClick={props.logOut}>Log out</button>
         </div>
      </div>         
      
   )

export default Nav;