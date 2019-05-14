const http = require('http');

const server = new http.Server();
const handler = require('./handler');

/*
1. core_modules/handler
2. ./node_modules/handler
  ../node_modules/handler
  ../../node_modules/handler
3. NODE_PATH=. node server.js
NODE_PATH=. node --inspect server.js
chrome://inspect/#devices
windows
  set NODE_PATH=. && node server.js

*/

server.on('request', handler);
//var path = NODE_PATH=.;
const emit = server.emit;
server.emit = (...args) => {
    //console.log(path);
    console.log(args[0]);
    return emit.apply(server, args);

};

server.listen(8000);
