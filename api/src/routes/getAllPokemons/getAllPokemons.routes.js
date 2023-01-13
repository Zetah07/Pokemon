const {Router} = requiere ('express');
const {getAllPokemons} = require ('./getAllPokemons');
const { Pokemon, Type } = require('../../db');
const router = Router();

router.get ('/', async (req, res) => {
})