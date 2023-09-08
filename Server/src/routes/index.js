const express = require("express");
const { getCharById, login, postFav, deleteFav } = require("../controllers");

const Routes = express.Router();

Routes.get("/character/:id",getCharById);
Routes.get("/login", login);
Routes.post("/fav", postFav);
Routes.delete("/fav/:id",deleteFav);

module.exports = Routes;