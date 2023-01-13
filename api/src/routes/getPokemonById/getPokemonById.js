const { Pokemon, Type } = require('../../db');
const axios = require('axios');

const getPokemonById = async (id) => {
    const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = api.data;
    return {
        id: pokemon.id,
        name: pokemon.name,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        imgUrl: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types.map(tuki => tuki.type.name)
    };
}

const getPokemonByIdFromDb = async (id) => {
    const result = await Pokemon.findByPk(id, {
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    })
    return {
        id: result.id,
        name: result.name,
        hp: result.hp,
        attack: result.attack,
        defense: result.defense,
        speed: result.speed,
        height: result.height,
        weight: result.weight,
        imgUrl: result.imgUrl,
        types: result.Types.map(type => type.name)
    };
}
module.exports = { getPokemonById, getPokemonByIdFromDb };