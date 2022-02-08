const express = require('express')
const path = require('path')
const Members = require('../public/Members')

const app = express();


const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(logger);

app.use(express.static(path.join(__dirname,'../','public') ,  {extensions: ['html', 'htm']}  ));



app.get('/api/members', (req,res)=>{
    res.json(Members);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}!!`);
})