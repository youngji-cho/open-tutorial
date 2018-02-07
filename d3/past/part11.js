let w=1000,
  h=500;

const dataset=[
  [15,20],[480,90],[250,50],
  [100,33],[330,95],[410,120],
  [475,44],[25,67],[85,61],
  [220,88]
];

let xScale =d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d[0];
  })])
  .range([0,w-200]);

let yScale =d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d[1];
  })])
  .range([0,h-200]);

const svg = d3.select("body")
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
  .attr("r",function(d){
    return d[0]/10;
  });;

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x",function(d){
    return xScale(d[0]);
  })
  .attr("y",function(d){
    return yScale(d[1]);
  })
  .text(function(d){
    return d[0]+","+d[1];
  });

svg.append("g")
  .call(d3.axisBottom().scale(xScale));

  var aScale = d3.scaleSqrt()      // <--New!
                 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                 .range([0, 10]);  // <--New!
