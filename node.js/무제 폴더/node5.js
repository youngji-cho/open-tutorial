const fs= require('fs');
const text=fs.readFileSync('./data/textfile.txt','utf-8');

/*
fs.readFile('./data/textfile.txt','utf-8',(err,data)=>{
  console.log(data);
})

let data1 = '야 머표';
let data2 = '대표 윤태환';

fs.writeFile('./data/textfile.txt',data1,'utf-8',(err)=>{
  console.log('complete1');
});

fs.writeFileSync('./data/textfile.txt',data2,'utf-8');
console.log('complete2');

fs.readFile('./data/textfile.txt','utf-8',(err,data)=>{
  console.log(data);
});
*/
