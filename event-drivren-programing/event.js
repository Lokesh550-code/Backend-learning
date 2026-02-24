const EventEmitter = require('events');

const customEmmiter = new EventEmitter();

customEmmiter.on('response', () => {
      console.log(`Data recieved`);
})

customEmmiter.emit('response');

customEmmiter.on('response', () => {   // Here the function won't emit for it, as it is below the .emit function
      console.log(`Data recieved 2`);
})
