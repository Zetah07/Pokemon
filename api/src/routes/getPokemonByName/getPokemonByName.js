const {Pokemon, Type} = require("../../db")
const axios = require("axios");


const getPokemonByName = async (name) => {
    try{
    const pokemonFromDB = await Pokemon.findAll({
        where: {
            name: name, 
            include:{
                model: Type,
                attributes: ["name"],
                through:{
                    attributes: [],
            }
        }}
    });
    
    const pokemonFromApi = async (name) =>{
        const result =await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = result.data;
        return{
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
        }
    };
    return [...pokemonFromDB, ...pokemonFromApi];
    }catch(error){
        throw new Error("cannot get pokemon by name", error);
    }
};

module.exports = getPokemonByName;
