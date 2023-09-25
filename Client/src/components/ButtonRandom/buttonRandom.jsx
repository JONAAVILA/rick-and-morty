

const ButtonRandom = ({onSearch})=>{
     

     const handleRandom = (event)=>{
           if(event){
            let id = Math.floor(Math.random()*827)
            onSearch(id)
        };  
     }

          
     return(
        <div>
            <button onClick={handleRandom}>random</button>
        </div>
     )   
}

export default ButtonRandom;

