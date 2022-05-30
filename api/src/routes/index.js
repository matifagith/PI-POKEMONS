const { Router } = require('express');
const { route } = require('./pokeGetRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokeGet = require('./pokeGetRoute');
const pokePost = require('./pokePostRoute');
const types = require('./pokeTypeRoute');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/pokemons', pokeGet);
router.use('/post', pokePost)
router.use('/types', types);

module.exports = router;
