const fs=require('fs');

//Sync
console.log(1);
const data=fs.readFileSync('./data.txt',{encoding:'utf-8'});
console.log(data);

//Async
console.log(2);
fs.readFile('./data.txt',{encoding:'utf-8'},(err,data)=>{
  console.log(3);
  console.log(data);
})
console.log(4);
//readfile이 끝나면 콜백을 실행한다. err가 있다면 err인자로 전달하고, err가 없다면 dtaa를 기반으로 실행한다.
