const http = require("http");
const characters = require('./utils/data');

const PORT = 3001;

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    
    if(url.includes('/rickandmorty/character')){
        const id = +req.url.split('/').at(-1)[0];
        const character = characters.find(char => char.id === id );
        res.writeHead(200, {"Content-Type":"application/json"})
        if(character){
            return res.end(JSON.stringify(character));
        } else {
            return res.end(JSON.stringify({"error":"Character not found"}));
        }
    }
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({"error":"not found"}))
});
server.listen(PORT, () => {console.log(`server levantado en el puerto ${PORT}`)} );
