let dataset = [
                  [   5,   20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [  25,   67 ],
                  [  85,   21 ],
                  [ 220,   88 ]
              ];

let w= 1000;
let h=500;

const svg = d3.select("body")
  .append("svg")
  .attr("width",w)
  .attr("height",h);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx",function(d){
    return d[0];
  })
  .attr("cy",function(d){
    return d[1];
  })
  .attr("r",function(d){
    return d[0]/50;
  });

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x",function(d){
    return d[0];
  })
  .attr("y",function(d){
    return d[1];
  })
  .text(function(d){
    return d[0]+","+d[1];
  });

svg.append("g")
  .call(d3.axisBottom().scale(xScale));



/*
d3.select("chart").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height",function(d){
    return d*10+"px";
  });
*/
