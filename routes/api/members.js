const express = require('express')
const Members = require('../../public/Members');
const router = express.Router();


//get all members
router.get('/', (req,res)=>{
    res.json(Members);
})

//get single member from id
router.get('/:id', (req,res)=>{
    const isFound = Members.some( (member) => {return member.id === parseInt(req.params.id)} );

    if(isFound){
        res.json(Members.filter( (member) =>{
            return member.id === parseInt(req.params.id);
        }))
    }else{
        res.status(400).json({message: `No member with id ${req.params.id} found.`})
    }

    
})

module.exports = router;