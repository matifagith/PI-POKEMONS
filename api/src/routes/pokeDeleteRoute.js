const express = require('express')
const router = express.Router()
const {Pokemon} = require('../db')


/* let pokesDeleted = [] */

router.delete('/:id',async (req, res, next)=>{ 
    try{
        const {id} = req.params
            /* const poke = await Pokemon.findOne({
                where: {id: id}
            })    
            pokesDeleted.push(poke.name)
            console.log(pokesDeleted) */

            Pokemon.destroy({
              where: { id: id },
            });

        res.send("Poke deleted successfully");
            
    }catch(e){
        next(e);
    }
 })


module.exports = router;