const { Pokemon, Type } = require('../../db');
const getPokemons = require('../getPokemons/getPokemons.js');

const getAllPokemons = async () => {
    try{
  const pokemonFromApi = await getPokemons();
  const resultApi = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through:{
        attributes: [],
      },
    },
  });
  const pokemonFromDb = resultApi ?.map(pokemon =>{
    return {
      id: pokemon.id,
      name: pokemon.name,
      hp: pokemon.hp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight,
      imgUrl: pokemon.imgUrl,
      shiny: pokemon.shiny,
      types: pokemon.Types.map((type) => type.name),
    };
  })
  return [...pokemonFromApi, ...pokemonFromDb]
}catch(error){
  throw new Error("cannot api & bd", error);
}
}

module.exports = getAllPokemons;
