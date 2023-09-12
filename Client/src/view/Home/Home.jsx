import Cards from "../../components/Cards/Cards";

const Home = ({characters,onClose})=>(
    <div className="home">
      <Cards characters={characters} onClose={onClose}/>  
    </div>
    
)

export default Home;