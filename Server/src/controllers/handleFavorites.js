let myFavorites = [];
console.log(myFavorites)

const postFav = (req, res)=>{
    const {  id, status, name, species, origin, image, gender  } = req.body;
    const favoriteChar = { id, status, name, species, origin, image, gender }
    myFavorites.push(favoriteChar);
    res.status(201).json(myFavorites);
}

const deleteFav = (req, res)=>{
    const { id } = req.params;
    myFavorites = myFavorites.filter((char) => char.id !== Number(id));
    res.json(myFavorites);
}

module.exports ={
    postFav,
    deleteFav,
}