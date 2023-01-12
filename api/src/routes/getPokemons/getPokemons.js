const axios = require("axios");
// const { Pokemon, Type } = require("../../db");

const getPokemons = async () => {
  try {
    const api = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=20&limit=251"
    );
    const urls = await api.data.results?.map((page) => axios.get(page.url));
    const getAll = await Promise.all(urls);
    const result = getAll.map((pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[5].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        imgUrl: pokemon.data.sprites.other.dream_world.front_default,
        types: pokemon.data.types.map((tuki) => tuki.type.name),
      };
    });
    return result;
  } catch (error) {
    throw new Error("cannot get all pokemons", error);
  }
};

module.exports = getPokemons;