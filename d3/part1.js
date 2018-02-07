function rowConverter(d){
  return {
    Food:d.Food,
    Deliciousness: parseFloat(d.Deliciousness)
  };
}

d3.csv("past/data7.csv",rowConverter,function(data){
  d3.select("body") // use selectAll() when you need more than one elements
    .data(data) //count and parse data value.
    .enter()//craete new, data-boud elements
    .append("p") // create new DOM elements
    .text(function(d){
      return `${d.Food},${d.Deliciousness}`;
    })
    .style("color",function(d){
      if(d.Deliciousness>4){
        return "red";
      } else {
        return "black";
      }
    });
});
