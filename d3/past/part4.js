let width = 420,
    barHeight =20;

let x =d3.scale.linear()
  .range([0,width]);

let chart =d3.select(".chart")
  .attr("width",width);

d3.tsv("./data4.tsv",type, (err,data)=>{
  x.domain([0,d3.max(data,(d)=>{return d.value;})]);
  chart.attr("height", barHeight*data.length);

  let bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform",(d,i)=>{return "translate(0," +i*barHeight+")";});

  bar.append("rect")
    .attr("width",(d)=>{return x(d.value);})
    .attr("height", barHeight -1);

  bar.append("text")
    .attr("x",(d)=>{return x(d.value)-3;})
    .attr("y", barHeight/2)
    .attr("dy", ".35em")
    .attr((d)=>{return d.value})
});

function type(d){
  d.value = +d.value;
  return d;
}
