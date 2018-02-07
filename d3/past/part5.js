let dataset= [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

d3.select("chart1").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height",(d)=>{
    let barHeight = d*5;
    return barHeight + "px";
  })
