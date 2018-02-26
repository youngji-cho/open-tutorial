const dataset = [5,10,15,20,25];
const dataset2D =  [[50,100],[150,200]];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height",function(d){
    let height =d*5;
    return `${height}px`;
  })

const svg=d3.select("body")
  .append("svg")
  .attr("width",1000)
  .attr("height",400);

svg.selectAll("circle")
  .data(dataset2D)
  .enter()
  .append("circle")
  .attr("cx",function(d){
    return d[0];
  })
  .attr("cy",function(d){
    return d[1];
  })
  .attr("r",10);
