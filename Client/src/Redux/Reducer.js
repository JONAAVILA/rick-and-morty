import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./Actions.Types"

const initialState = {
    myFavorites:[],
    allCharacters:[],
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
         case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
         case REMOVE_FAV:
                return { ...state, myFavorites: action.payload };
         case FILTER:
                const filterFavorite = state.allCharacters.filter(char => char.gender === action.payload)
            return{
                ...state,
                myFavorites: filterFavorite,
            }
         case ORDER:
                const filterOrderId = state.allCharacters.sort((a,b)=>{
                        if(action.payload === "A"){
                            return a.id - b.id;
                        } else {
                            return b.id - a.id;
                        }
                })
            return{ 
                ...state,
                myFavorites:filterOrderId,
            }
        default: 
                return state   
    }
}

export default rootReducer;