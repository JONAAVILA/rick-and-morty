import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./NavModule.css";

const Nav = (props)=>(
      <aside className="Nav_conteiner">
            <div>
               <Link to="/about">
                  <button className="button">About</button>
               </Link>   
            </div>
            <div>
               <Link to="/home">
                  <button className="button">Home</button>
               </Link>  
            </div>
            <div>
               <Link to="/favorites" >
                  <button className="button">Favorites</button>   
               </Link>  
            </div>
            <div >
               <SearchBar onSearch={props.onSearch}/>
            </div>
            <div className="button_exit">
               <button className="button" onClick={props.logOut}>exit</button>
            </div>
      </aside>         
      
   )

export default Nav;