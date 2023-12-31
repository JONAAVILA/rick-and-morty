import { useState, useEffect} from 'react';
import './App.css';
import './components/Nav/NavModule.css'
import Nav from './components/Nav/Nav'; 
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './view/Home/Home';
import About from './view/About/About';
import Detail from './view/Detail/Detail';
import Error from './view/404/Error';
import Login from './view/Login/Login';
import Favorites from './components/Favorites/Favorites';



function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const logOut = ()=>{
      setAccess(false)  
      navigate('/')
   }


   function onSearch (id){
      if(id){
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data })=>{
            if(data.name){
               const existingCharacter = characters.find((character)=>character.id === data.id);
               if(existingCharacter){
                  window.alert("¡El personaje ya existe!");
               } else{
                  setCharacters((oldCharacter)=> [...oldCharacter,data]);  
               }
            } else {
               window.alert("¡No hay personaje con este ID!");
            }
            
         });  
      }else {
         window.alert("Introduzca un valor válido!")
      }
      
   }

   function onClose (id){
      const filterCharacters = characters.filter(character => character.id !== Number(id))
      setCharacters(filterCharacters);
   }




   return (
      <div className='App'>
          {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
        <Routes>
          <Route path="/" element={<Login login={login}/>} />
          <Route path="/home" element={<Home characters={characters} onClose={onClose} onSearch={onSearch}/>} Route/>
          <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='*' element={<Error/>} />
        </Routes> 
      </div>
   );

}

export default App;
