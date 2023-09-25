

const ButtonRandom = ({onSearch})=>{
     

     const handleRandom = (event)=>{
           if(event){
            let id = Math.floor(Math.random()*827)
        };  
     }

          
     return(
        <div>
            <button onClick={onSearch(id)}>random</button>
        </div>
     )   
}

export default ButtonRandom;

