const {Type} = require('../../db');
const axios = require('axios');

const getTypes = async () => {
    try{
        const typesFromApi = await axios.get('https://pokeapi.co/api/v2/type/?offset=0&limit=18');
        const types = typesFromApi.data.results.map(type => type.name);
        const typesFromDb = await Type.findAll();
        const typesDb = typesFromDb.map(type => type.name);
        return [...types, ...typesDb];
    }catch(error){
        throw new Error("cannot get types", error);
    }
}

module.exports = getTypes;