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
            <h3>{props.status}</h3>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
            <h3>{props.origin}</h3>
         </div>
         <div className="close">
            {showButtonX && <button onClick={()=> props.onClose(props.id)}>Delete</button>}  
         </div>
      </div>
   );
}
