const express = require('express')
const path = require('path')
const logger = require('../middlewares/logger');


const app = express();


//logger middleware
app.use(logger);


app.use(express.static(path.join(__dirname,'../','public') ,  {extensions: ['html', 'htm']}  ));

app.use('/api/members', require('../routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}!!`);
})