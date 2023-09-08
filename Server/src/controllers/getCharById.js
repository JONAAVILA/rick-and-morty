const axios = require("axios");

// function getCharById(res,id){

//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=>{
//         const { name,gender,species,origin,image,status } = response.data;
//         res.writeHead(200, {'Content-Type':'application/json'} );
//         res.end(JSON.stringify({ id,name,gender,species,origin,image,status }))
//     })
//     .catch((error)=>{
//         res.writeHead(500, {'Content-Type':'text/plain'})
//         res.end(error.message)
//     })
// }

// module.exports = {
//     getCharById
// };  

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res)=>{
    const { id } = req.params;
    
    axios(URL+id).then((response)=>{
        if(response.status === 200){
            const { id, status, name, species, origin, image, gender } = response.data;
            res.json({ id, status, name, species, origin, image, gender });

        } else {
            res.status(404).json("Not fount");
        }
    })
    .catch((error)=>{
        res.status(500).json({error: message.error});
    })
}

module.exports = getCharById;