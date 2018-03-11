const dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25, 5, 10, 13, 19, 21, 25, 22, 18, 15, 25 ]
const width = parseInt(d3.select("#bar").style("width"));
const height = parseInt(d3.select("#bar").style("height"));
const bp = 20;
const sp = 10;
const barw = 40;

const xScale= d3.scaleBand()
  .domain(d3.range(dataset.length))
  .range([bp,width-bp]);

const yScale=d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d;
  })])
  .range([height-bp,bp])

const barSvg= d3.select("#bar")
  .append("svg")
  .attr("width",width)
  .attr("height",width)
  .attr("viewBox","0 0 "+width+" "+height)
  .attr("preserveAspectRatio","xMinYMin meet")

barSvg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("fill",function(d){
    return "rgb(0,0,"+Math.round(d*10)+")"
  })
  .attr("width",barw)
  .attr("height",function(d){
    return height-yScale(d);
  })
  .attr("x",function(d,i){
    return xScale(i);
  })
  .attr("y",function(d){
    return yScale(d)-bp;
  })

barSvg.append("g")
    .call(d3.axisBottom().scale(xScale))
    .attr("class","axis")
    .attr("transform","translate(0,"+(height-bp+1)+")");

barSvg.append("g")
    .call(d3.axisRight().scale(yScale))
    .attr("class","axis");
