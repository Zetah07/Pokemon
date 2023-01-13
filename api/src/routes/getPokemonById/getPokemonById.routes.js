const { Router } = require('express');
const { getPokemonById, getPokemonByIdFromDb } = require('./getPokemonById');
const router = Router();

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        if (id < 252) {
            const pokemon = await getPokemonById(id);
            return res.status(200).send(pokemon);
        }
        else {
            const pokemondb = await getPokemonByIdFromDb(id);
            return res.status(200).send(pokemondb);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;