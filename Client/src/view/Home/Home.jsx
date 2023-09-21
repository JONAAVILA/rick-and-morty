import Cards from "../../components/Cards/Cards";
import './Home.css';

const Home = ({characters,onClose})=>(
    <div className="home">
      <div className="box_button">
        <button className="linkedin">lin</button>
        <button className="git">git</button>
      </div>
      <Cards characters={characters} onClose={onClose}/>  
    </div>
    
)

export default Home;