const parseTime = d3.timeParse("%Y-%m-%d");
const margin ={top:20, right:20,bottom:30,left:50},
  width=1000,
  height=1000;

const xScale=d3.scaleTime().range([margin.left,width-margin.right]);
const yScale=d3.scaleLinear().range([height-margin.top,margin.bottom]);
const line=d3.line()
  .x(function(d){return xScale(d.date)})
  .y(function(d){return yScale(d.average_price)});

function chartdraw(data){
    d3.selectAll("svg > *").remove();
    const recSvg=d3.select("#svg")
      .attr("width",width + margin.left + margin.right)
      .attr("height",height + margin.top + margin.bottom)

    data.forEach(function(d){d.date=parseTime(d.date)});
    xScale.domain(d3.extent(data,function(d){
      return d.date;
    }));
    yScale.domain(d3.extent(data,function(d){
      return d.average_price;
    }));

    recSvg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", line);

    recSvg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisTop(xScale)
        .tickFormat(d3.timeFormat("%Y-%m-%d")));
    recSvg.append("g")
      .call(d3.axisRight(yScale));
    recSvg.attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom));
    console.log(data);
}

function smpGraph(id){
  let startDate = new Date();
  let endDate = new Date();

  switch(id){
    case "smpTotal":
      startDate.setDate(startDate.getDate()-100000)
      break;
    case "smpOneyear":
      startDate.setDate(startDate.getDate()-365);
      break;
    case "smpSixmonth":
      startDate.setDate(startDate.getDate()-180);
      break;
    case"smpThreemonth":
      startDate.setDate(startDate.getDate()-90);
      break;
  }

  let startDateQuery= `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDay()}`;
  let endDateQuery= `${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDay()}`;
  fetch(`http://www.fermi.me/rec_data/average_price/${startDateQuery}/${endDateQuery}/total`).then(
  response => {
  	if (response.ok) {
     return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => chartdraw(jsonResponse));
}



/*
d3.json('data.json',(err,data)=>{
  chartdraw(data);
})
*/
