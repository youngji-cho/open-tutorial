console.time('a');

let output=1;
for (let i=1; i<=10 ; i++){
  output *=i;
}

console.log('Result', output);
console.timeEnd('a');
