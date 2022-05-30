const express = require('express')
const router = express.Router()
const {typesFromDb} = require ('./controllers/types')

router.get('/', async (req, res, next)=>{
    try{
        console.log('typesFromDb()')
        const pokeTypes = await typesFromDb();
        const typesArray = pokeTypes?.map(t => t.name)        
        res.status(200).send(typesArray)
    }catch(e){
        next(e)
    }
})


module.exports = router;