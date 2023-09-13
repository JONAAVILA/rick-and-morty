import Card from '../Card/Card';
import './Cards.css';

export default function Cards({ characters, onClose }) {
   return   ( 
         <div className='cards'>
                  {characters.map((person)=>{
                        return (
                     <Card
                        key={person.id}      
                        id={person.id}
                        name={person.name}
                        status={person.status}
                        species={person.species}
                        gender={person.gender}
                        origin={person.oeigin}
                        image={person.image}
                        onClose={onClose}
                     />);
                  })}
         </div>   
      )
}