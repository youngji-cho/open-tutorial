let dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];

let w= 500;
let h= 200
let barPadding =1;
const svg =d3.select("body")
  .append("svg")
  .attr("width",w)
  .attr("height",h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("fill","teal")
  .attr("x",function(d,i){
    return i*(w/(dataset.length-5));
  })
  .attr("y",function(d){
    return (h-d*4);
  })
  .attr("width",w/(dataset.length-barPadding))
  .attr("height",function(d){
    return d*4;
  });




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
