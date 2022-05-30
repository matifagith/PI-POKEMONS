const express = require('express')
const router = express.Router()
const {Pokemon, Type} = require('../db')

router.post('/',async (req, res, next)=>{
    try{
        const{
            name,
            height,
            weight,
            hp,
            speed,
            attack,
            defense,
            image,
            types
        } = req.body

    const pokeCreate = await Pokemon.create({
        name,
        height,
        weight,
        hp,
        speed,
        attack,
        defense,
        image
    })

    if(types){
        for (let i = 0; i < types.length; i++) {
            const type = await Type.findOne({
                where: {name: types[i]}
            })
            pokeCreate.addType(type)
        }
    }
    res.status(201).send('Pokemon created succesfully')

    }catch(e){
        next(e)
    }
})

module.exports = router;