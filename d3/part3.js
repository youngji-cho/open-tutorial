/*
4 types of axis: d3.axisTop / d3.axisBottom/d3.axisLeft/d3.axisRight 2
ex) var xAxis= d3.
g element is a group element. group elements are invisible
*/

const dataset = [
                  [   5,   20 ],[ 480,   90 ],[ 250,   50 ],
                  [ 100,   33 ],[ 330,   95 ],[ 410,   12 ],
                  [ 475,   44 ],[  25,   67 ],[  85,   21 ],
                  [ 220,   88 ]
              ];
let width =1000,
  height =500;

const scatterSvg=d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height);

const xScale=d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d[0];
  })])
  .range([width*0.1,width*0.9]);

const yScale=d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d[1];
  })])
  .range([height*0.1,height*0.9]);

scatterSvg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx",function(d){
    return xScale(d[0]);
  })
  .attr("cy",function(d){
    return yScale(d[1]);
  })
  .attr("r",10);

scatterSvg.selectAll("text")
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



const xAxis =d3.axisBottom(xScale);
const yAxis=d3.axisRight(yScale);


scatterSvg.append("g")
  .attr("transform",`translate(0,${height*0.95})`)
  .call(xAxis);

scatterSvg.append("g")
  .attr("transform",`translate(${width*0.05},0)`)
  .call(yAxis);
