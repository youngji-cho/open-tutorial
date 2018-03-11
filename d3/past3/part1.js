let dataset = [5,10,15,20,25];

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height",(d)=>{
    return d*5+"px";
  });

let w =500,
 h =100;

const circle_svg =d3.select("body")
  .append("svg")
  .attr("width",w)
  .attr("height",h);

circle_svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx",(d,i)=>{
    return (i*100+25);
    console.log(i);
  })
  .attr("cy",h/2)
  .attr("r",(d)=>{
    return d;
  })
  .attr("fill","yellow")
  .attr("stroke","orange")
  .attr("stroke-width",(d)=>{
    return d/2;
  });

const rect_svg=d3.select("body")
  .append("svg")
  .attr("width",w)
  .attr("height",h)

rect_svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x",(d,i)=>{
    return i*100;
  })
  .attr("y",(d)=>{
    return h-d*4;
  })
  .attr("width",w/(dataset.length)-10)
  .attr("height",(d,i)=>{
    return d*4;
  })
  .style("fill","red");

rect_svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){
    return d;
  })
  .attr("x",(d,i)=>{
    return i*100+50;
  })
  .attr("y",(d)=>{
    return h-(d*4);
  })
  .attr("font-family","sans-serif")
  .attr("font-size","15px")
  .attr("fill","black");
