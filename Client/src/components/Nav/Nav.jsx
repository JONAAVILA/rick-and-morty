import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NavModule.css";



const Nav = (props)=>{
   const Location = useLocation();
   const buttonActive = Location.pathname === "/home";

   return(
      <aside className="Nav_conteiner">
            <div>
               <Link to="/about">
                  <button >About</button>
               </Link>   
            </div>
            {buttonActive ? (<div> 
               <Link to="/home">
                  <button className="button_home">Home</button>
               </Link>  
            </div>) : (<div> 
               <Link to="/home">
                  <button className="button_home_active">Home</button>
               </Link>  
            </div>)}
            <div>
               <Link to="/favorites" >
                  <button>Favorites</button>   
               </Link>  
            </div>
            <div >
               <SearchBar onSearch={props.onSearch}/>
            </div>
            <div className="button_exit">
               <button onClick={props.logOut}>exit</button>
            </div>
      </aside>         
      
   )}

export default Nav;