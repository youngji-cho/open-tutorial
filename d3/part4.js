const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

const width = 600,
  height =250,
  barpadding =0.05,
  x_margin = 0.1,
  y_margin = 0.1,
  xAxis_margin=0.07,
  yAxis_margin=0.05;


const xScale= d3.scaleBand()
  .domain(d3.range(dataset.length))
  .range([width*x_margin,width*(1-x_margin)])
  .paddingInner(0.05);

const text_margin=xScale.bandwidth()/10;

const yScale =d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){
    return d;
  })])
  .range([height*y_margin,height*(1-y_margin)]);

const xAxis= d3.axisBottom(xScale);
const yAxis= d3.axisLeft(height-yScale);

const barsvg=d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height);

barsvg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width",xScale.bandwidth())
  .attr("height",function(d){
    return yScale(d);
  })
  .attr("x",function(d,i){
    return xScale(i);
  })
  .attr("y",function(d){
    return height*(1-y_margin)-yScale(d);
  });

barsvg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){
    return d;
  })
  .attr("x",function(d,i){
    return xScale(i)+text_margin;
  })
  .attr("y",function(d){
    return height*(1-y_margin)-yScale(d)+20;
  })
  .attr("fill","red");

barsvg.append("g")
  .attr("transform",`translate(0,${height*(1-xAxis_margin)})`)
  .call(xAxis);

barsvg.append("g")
  .attr("transform",`translate(${width*yAxis_margin},0)`)
  .call(yAxis);
