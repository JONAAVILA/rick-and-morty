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
               <h2>This is a aplication of Rick and Morty</h2>
               <p>You can search any character whatever you want and add it to favorites</p>
            </div>
         </div> 
         <div>
            <div className="box_searchbar">
               <SearchBar onSearch={props.onSearch}/>
            </div>
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
               <footer><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copyright" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"></path>
                        </svg> Create with passion and <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
</svg> </footer>
         </div>
      </aside>         
      
   )}

export default Nav;