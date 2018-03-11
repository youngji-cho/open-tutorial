const dataset = [100,200,300,400,500];
const w =1000,
  h =300;

const xScale = d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d[0];
  })])
  .range([0,w]);

const yScale = d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d;
  })])
  .range([0,h]);

const ordinalScale= d3.scaleOridinal ()
  .domain([0,10])
  .range([0,h]);

const rectsvg= d3.select("body")
  .append("svg")
  .attr("width",w)
  .attr("height",h);

rectsvg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width",20)
  .attr("height",function(d){
    return yScale(d);
  })
  .attr("y",function(d){
    return h-yScale(d);
  })
  .attr("x",function(d,i){
    return i*w/(dataset.length^2);
  });

rectsvg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){
    return d;
  })
  .attr("y",function(d){
    return h-yScale(d);
  })
  .attr("x",function(d,i){
    return i*w/(dataset.length^2);
  })
  .attr("fill","red");
