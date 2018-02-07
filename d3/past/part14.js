const dataset1 = [100,200,300,400];
const dataset2 = [
  [5, 20], [480, 90], [250, 50],
  [100, 33], [330, 95],[410, 12],
  [475, 44], [25, 67], [85, 21],
  [220, 88]
];

const width = 400,
      height= 500;

const xScale =d3.scaleLinear()
  .domain([0,d3.max(dataset2,function(d){
    return d[0];
  })])
  .range([0,width]);

const yScale=d3.scaleLinear()
  .domain([0,d3.max(dataset2,function(d){
    return d[1];
  })])
  .range([0,height])
