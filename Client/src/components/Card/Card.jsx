import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import './Card.css';


export default function Card(props) {
   
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites);
   const location = useLocation()

   const handleFavorite = ()=>{
         if(isFav) {
            setIsFav(!isFav)
            dispatch(removeFav(props.id))
         } else {
            setIsFav(!isFav)
            dispatch(addFav(props))
         }
         
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);


   const showButtonX = location.pathname !== "/favorites";
   
   return (
      
      <div className="card_character">
         
         <div className="description" >
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
         </div>
         <div className="imagen">
            <img src={props.image} alt={props.name} />
         </div>
         <div className="conteiner_icons">
            <div className="box_delete">
            {showButtonX && <button onClick={()=> props.onClose(props.id)}>
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M4 7l16 0"></path>
               <path d="M10 11l0 6"></path>
               <path d="M14 11l0 6"></path>
               <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
               <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
               </svg></button>}  
            </div>
            
            { props.status === "Alive" ? (
              <div className="icon_life">
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity-heartbeat" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"></path>
               </svg>
            </div> 
            ) : (
               <div className="icon_life_dead">
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity-heartbeat" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"></path>
               </svg>
            </div> 
            ) 
            }
            {
         isFav ? (
            <div className="button_fav_active">
               <button onClick={handleFavorite}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
               </button>  
            </div>
         ) : (
            <div className="button_fav">
               <button onClick={handleFavorite}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
               </button>  
            </div>
         )
         }
            
         </div>

         
         
      </div>
   );
}
