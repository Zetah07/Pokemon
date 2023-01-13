const {Router} = requiere ('express');
const {getPokemonByName} = require ('./getPokemonByName');
const router = Router();

router.get ('/pokemons', async (req, res) => {
 try {
    const{name}= req.query;

    if (name){
        const pokemon =await getPokemonByName(name.toLowerCase());
        if (!pokemon){
            throw new Error('Pokemon not found');
        } return res.status(200).send(pokemon);
    }
} catch (error) {
    res.status(400).send(error.message);
}
})