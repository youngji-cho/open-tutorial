const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

let w =600;
let h =250;

let xScale =d3.scaleBand()
  .domain(d3.range(dataset.length))
  .range([0,w])
  .paddingInner(0.05);

let yScale = d3.scaleLinear()
  .domain([0,25])
  .range([0,h]);


d3.select("body")
  .on("click",function(){
    let dataset1 = [ 11, 12, 15, 20, 18, 17, 16, 18, 23, 25, 5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];
    let svg =d3.select("p")
      .append("svg")
      .attr("width",w)
      .attr("height",h);

    svg.selectAll("rect")
      .data(dataset1)
      .enter()
      .append("rect")
      .attr("x", function(d){
          return xScale(dataset1.indexOf(d));
      })
      .attr("y",function(d){
        return h-yScale(d);
      })
      .attr("height",function(d){
        return yScale(d);
      })
      .attr("width",20);
    alert("success!");
  });
