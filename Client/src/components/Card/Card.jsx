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
         {
         isFav ? (
         <div className="button_fav">
            <button onClick={handleFavorite}>❤️</button>  
         </div>
         ) : (
         <div className="button_fav">
            <button onClick={handleFavorite}>🤍</button>  
         </div>
         )
         }
         <div className="imagen">
            <img src={props.image} alt={props.name} />
         </div>
         <div className="description" >
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            <h4>{props.status}</h4>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.origin}</h4>
         </div>
         <div className="close">
            {showButtonX && <button onClick={()=> props.onClose(props.id)}>
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M4 7l16 0"></path>
               <path d="M10 11l0 6"></path>
               <path d="M14 11l0 6"></path>
               <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
               <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
               </svg>Delete</button>}  
         </div>
      </div>
   );
}
