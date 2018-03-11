google.charts.load('current',{'packages':['annotationchart']});
google.charts.load('current',{"packages":["map"],"mapsApiKey":"AIzaSyCL4sf6WOiH24ZiSeot7_HbsAvHL50fueU"});
google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(priceChart);
google.charts.setOnLoadCallback(plantMap);
google.charts.setOnLoadCallback(initChart);

$(window).on("throttledresize", function (event) {
    initChart();
});

function initChart(){
  let options = {
    legend: 'none',
    width: '100%',
    height: '100%',
    pieSliceText:'percentage',
    colors:['#0598d8', '#f97263'],
    chartArea:{
      left: "3%",
      top: "3%",
      height: "94%",
      width: "94%"
    }
  };
  let data= google.visualization.arrayToDataTable([
        ['Gender', 'Overall'],
        ['M', 110],
        ['F', 20]
    ]);
    drawChart(data, options);
}

function drawChart(data, options) {
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}

var URL = "https://docs.google.com/spreadsheets/d/1_WuRPqGhuuj7lGJn286_oU35kgUaMZ-fwpEzKART9L8/gviz/tq?sheet=통합&headers=1&range=A1:B200&tq=";

function priceChart() {
  var query  = new google.visualization.Query(URL);
  query.send(handleQueryResponse);
}

function handleQueryResponse(response){
  if (response.isError()){
    alert('Error in query:'+response.getMessage()+' '+response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  var chart = new google.visualization.AnnotationChart(document.getElementById('priceChart_div'));
  var options ={
    displayAnnotations: true
  };
  chart.draw(data, options);
}

function plantMap(){
  var data=new google.visualization.arrayToDataTable([
    ['Lat', 'Long', 'Name'],
    [37.1104, 128.2806, '영월태양광발전소'],
    [35.601080,127.2454,'신안태양광발전소']
  ]);

  var map = new google.visualization.Map(document.getElementById('plantMap_div'));
  map.draw(data,{
    showTooltip: true,
    showInfoWindow: true
  });
}
