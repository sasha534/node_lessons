const fs = require("fs");

// tasks queue [setImmediate, readFile]
// microtasks queue [nextTick, resolve]

console.log('start');//1

fs.readFoleSync(__filename, 'r', (err) =>{
    console.log('read file');//2

});

setImmediate(() =>{
  console.log('immediate');//6
});

new Promise(resolve => {
  console.log('promise create');//2
  resolve('promise then');
}).then(value => console.log(value));//5

process.nextTick(() => {
    console.log('nextTick1');//4

})
