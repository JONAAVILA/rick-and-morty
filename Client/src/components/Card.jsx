import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";






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
      
      <div>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
         }
         {showButtonX && <button onClick={()=> props.onClose(props.id)}>X</button>}
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
