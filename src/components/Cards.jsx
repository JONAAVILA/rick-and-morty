import Card from './Card';

export default function Cards({ characters, onClose }) {
   return   ( <div>
                  {characters.map((person)=>{
                        return (
                     <Card
                        key={person.id}      
                        id={person.id}
                        name={person.name}
                        status={person.status}
                        species={person.species}
                        gender={person.gender}
                        origin={person.name}
                        image={person.image}
                        onClose={onClose}
                     />);
                  })}
             </div>)
}