const {Router} = require('express');
// const {getAllPokemons} = require('./getAllPokemons/getAllPokemons.js')
const getPokemonById = require('./getPokemonById/getPokemonById.routes.js')
// const {getTypes} = require('./getTypes/getTypes.js')
// const {getPokemonByName} = require('./getPokemonByName/getPokemonByName.js')

const router = Router();

// rutas generales de el back 
// router.get('/pokemons', getAllPokemons);
router.use('/pokemons', getPokemonById);
// router.get('/types', getTypes);
// router.get('/:id', getPokemonByName);
// pokedexRouter.post('', routes.xxxxxxxxxxx) 
// por agregar el contido de actualizacion  y subida de los pokemon por form

module.exports= router;
