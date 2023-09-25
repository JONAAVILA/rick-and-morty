import Cards from "../../components/Cards/Cards";
import ButtonRandom from "../../components/ButtonRandom/buttonRandom";
import './Home.css';

const Home = ({characters,onClose, onSearch})=>(
    <div className="home">
      <ButtonRandom onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose}/>  
    </div>
    
)

export default Home;