//commonJs, every file is module by default
// Modules -> Encapsulated code

const sayHi = require('./utils');
const names = require('./names');

sayHi(names.author);
sayHi(names.friend);
sayHi(names.girlfriend);
sayHi(names.sidechick);