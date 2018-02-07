const parseTime = d3.timeParse("%Y .%m .%d");


d3.tsv('data12.tsv',(err,data)=>{
  console.log(date);
  parseTime(data[0].date);
});
