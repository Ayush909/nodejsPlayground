const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter{
    log(msg){
        this.emit('message',{id:uuid.v4(), msg: msg});
    }
}

// module.exports = Logger;


const logObj = new Logger();

logObj.on('message',(data)=>{
    console.log("Logger fired",data);
})

logObj.log("hello Ayush!");
logObj.log("hello Max!");
logObj.log("hello Best!");