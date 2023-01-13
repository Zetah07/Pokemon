const {Router} = requiere ('express');
const {getPokemonById} = require ('./getPokemonById');
const { Pokemon, Type } = require('../../db');
const router = Router();

router.get ('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        if (id < 252){
            const pokemon = await getPokemonById(id);
            if (!pokemon){
                throw new Error('Pokemon not found');
            } return res.status(200).send(pokemon);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})