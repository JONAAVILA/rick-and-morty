import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NavModule.css";



const Nav = (props)=>{
   const Location = useLocation();
   const buttonHomeActive = Location.pathname === "/home";
   const buttonFavoritesActive = Location.pathname === "/favorites";
   const buttonAboutActive = Location.pathname === "/about";

   return(
      <aside className="Nav_conteiner">
         <div>
            <div>
               <h1>Welcome</h1>
               <p>This is a aplication of Rick and Morty</p>
            </div>
            <div className="box_searchbar">
               <SearchBar onSearch={props.onSearch}/>
            </div>
         </div> 
         <div>
            {buttonHomeActive ? (<div> 
               <Link to="/home">
                  <button className="button_home">Home</button>
               </Link>  
            </div>) : (<div> 
               <Link to="/home">
                  <button className="button_home_active">Home</button>
               </Link>  
            </div>)}
            {buttonAboutActive ? (<div> 
               <Link to="/about">
                  <button className="button_about">About</button>
               </Link>  
            </div>) : (<div> 
               <Link to="/about">
                  <button className="button_about_active">About</button>
               </Link>  
            </div>)}
            {buttonFavoritesActive ? (<div> 
               <Link to="/favorites">
                  <button className="button_favorites">Favoritos</button>
               </Link>  
            </div>) : (<div> 
               <Link to="/favorites">
                  <button className="button_favorites_active">Favoritos</button>
               </Link>  
            </div>)}
         </div>
            
         <div className="box_exit">
               <button className="button_exit" onClick={props.logOut}>Exit</button>
         </div>
      </aside>         
      
   )}

export default Nav;