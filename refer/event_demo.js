const EventEmitter = require('events');

class MyEmit extends EventEmitter{}

const myobj = new MyEmit();

myobj.on('xyz',function(a,b){
    console.log("event fired!");
    console.log(a,b,this);
})

myobj.on('abc',()=>{
    console.log("abc fired!");
})

myobj.emit('xyz',12,13);

myobj.emit("abc");