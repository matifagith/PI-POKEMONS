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
        image: image.length === 0 ? defaultImage : image
    })

    if(types){
        for (let i = 0; i < types.length; i++) {
            const type = await Type.findOne({
                where: {name: types[i]}
            })
            /* console.log(type) */
            pokeCreate.addType(type)
        }
    }
    res.status(201).send('Pokemon created succesfully')

    }catch(e){
        next(e)
    }
})

module.exports = router;

const defaultImage = 'data:image/png;base64,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'















