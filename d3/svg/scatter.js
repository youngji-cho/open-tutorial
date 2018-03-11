const dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

const opt={width:1000,height:500,pad:70,smallpad:20}
const xScale =d3.scaleLinear()
  .domain([0,d3.max(dataset,(d)=>{
    return d[0];
  })])
  .range([opt.pad,opt.width-opt.pad])

const yScale=d3.scaleLinear()
  .domain([0,d3.max(dataset,(d)=>{
    return d[1];
  })])
  .range([opt.pad,opt.height-opt.pad]);

const scatterSvg= d3.select("#scatter")
  .append("svg")
  .attr("width",opt.width)
  .attr("height",opt.height)

scatterSvg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("r",(d)=>{
    return Math.sqrt(Math.sqrt(d[0]*d[1]));
  })
  .attr("cx",(d)=>{
    return xScale(d[0]);
  })
  .attr("cy",(d)=>{
    return yScale(d[1]);
  })

scatterSvg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x",(d)=>{
    return xScale(d[0]);
  })
  .attr("y",(d)=>{
    return yScale(d[1]);
  })
  .text((d)=>{
    return d[0]+","+d[1]
  })
  .attr("fill","red")

scatterSvg.append("g")
  .attr("transform", "translate(0,"+(opt.height-opt.smallpad)+")")
  .call(d3.axisBottom().scale(xScale).ticks(25))
  .attr("class","axis");

scatterSvg.append("g")
  .call(d3.axisRight().scale(yScale).ticks(25))
  .attr("class","axis");


/*
const dataset1= [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];





d3.select("body").selectAll("div")
  .data(dataset1)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height",function(d){
    return d*5+"px";
  })


const option={barwid:20,barpad:7.5,height:5,textpad:8}

const recSvg= d3.select("#bar")
  .append("svg")
  .attr("width",500)
  .attr("height",500)

recSvg.selectAll("rect")
  .data(dataset1)
  .enter()
  .append("rect")
  .attr("width",option.barwid)
  .attr("height",function(d){
    return d*option.height;
  })
  .attr("x",(d,i)=>{
    return option.barwid*i+option.barpad;
  })
  .attr("y",(d)=>{
    return 500-d*option.height;
  })
  .attr("fill","teal");

recSvg.selectAll("text")
  .data(dataset1)
  .enter()
  .append("text")
  .text((d)=>{
    return d;
  })
  .attr("x",(d,i)=>{
    return option.barwid*i+option.barpad+5;
  })
  .attr("y",(d)=>{
    return 500-d*option.height+10;
  })
  .attr("fill","white")
  .attr("font-size","10px")


const dataset2 = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

const scatterSvg = d3.select("#scatter")
  .append("svg")
  .attr("width",500)
  .attr("height",500);

scatterSvg.selectAll("circle")
  .data(dataset2)
  .enter()
  .append("circle")
  .attr("cx",(d)=>{
    return d[0];
  })
  .attr("cy",(d)=>{
    return d[1];
  })
  .attr("r",10);
*/
