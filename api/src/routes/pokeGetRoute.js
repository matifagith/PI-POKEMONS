const express = require('express')
const router = express.Router()
const {getAllPokes, getAllPokesByName, getPokeById} = require ('./controllers/pokemons')

router.get('/', async (req, res, next)=>{
    try{
        const {name} = req.query

        if(name){
            console.log(`getAllPokesByName(name: ${name})`)
            const pokeinfoByName = await getAllPokesByName(name);
            if(pokeinfoByName === 'PDNE'){
                res.status(200).send('PDNE')
            }
            /* console.log('pokeinfoByName: ')
            console.log(pokeinfoByName)  */
            res.status(200).json(pokeinfoByName)
        }
        else{
            console.log('getAllPokes()')
            const pokes =  await getAllPokes();
            /* console.log(pokes) */
            res.status(200).json(pokes) 
        }
    }catch(e){
        next(e)
    }
})

/* router.get('/dbpokemons', async (req, res, next)=>{
    try{
        const allDbPokes = await getAllDbPokes()
        res.status(200).json(allDbPokes)
    }catch(e){
        next(e)
    }
}) */


router.get('/:id', async (req, res, next)=>{
    try{
        const {id} = req.params
        if(id){
            console.log(` getPokeById(id: ${id})`)
            const poke = await getPokeById(id)
            if(poke === 'PDNE'){
                res.status(404).send('PDNE')
            }
            res.status(200).json(poke)
        }

    }catch(e){
        next(e)
    }
})




module.exports = router;