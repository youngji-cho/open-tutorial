/*D3 scales are functions with parameters that you define.

A scale input : domain
output: range
*/

const dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];
const dataset1 =[
  [85, 21],
  [480, 90],
  [5, 20]
]
let w =1000;
let h =400;
let padding=80;

const xScale =d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d[0]
  })])
  .range([padding,w-padding]);
const xAxis = d3.axisBottom(xScale);

const yScale =d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d[1]
  })])
  .range([h-padding,padding]);

const yAxis=d3.axisLeft(yScale)

const svg =d3.select("body")
  .append("svg")
  .attr("width",w)
  .attr("height",h);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx",function(d){
    return xScale(d[0]);
  })
  .attr("cy",function(d){
    return yScale(d[1]);
  })
  .attr("r",3);

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){
    return d;
  })
  .attr("x",function(d){
    return xScale(d[0]);
  })
  .attr("y",function(d){
    return yScale(d[1]);
  })
  .style("fill","red");

svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(0,"+(h-padding)+")")
  .call(xAxis);

svg.append("g")
  .attr("class","axis")
  .call(yAxis);
