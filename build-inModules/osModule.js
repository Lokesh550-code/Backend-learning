const os = require("os");

// info about the current user

const user = os.userInfo();
// console.log(user);

// info about the system up-time

// console.log(`the system upTime is ${os.uptime()} seconds`);


const osInfo = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(osInfo);