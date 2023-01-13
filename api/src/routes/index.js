const express = require('express');
import * as routes from '../routes';

export const pokedexRouter = express.Router();

// rutas generales de el back 
pokedexRouter.get('/pokemons', routes.getAllPokemons);
pokedexRouter.get('/pokemons/:id', routes.getPokemonById);
pokedexRouter.get('/types', routes.getTypes);
pokedexRouter.get('/:id', routes.getPokemonsByName);
// pokedexRouter.post('', routes.xxxxxxxxxxx) 
// por agregar el contido de actualizacion  y subida de los pokemon por form
