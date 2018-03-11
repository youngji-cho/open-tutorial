google.charts.load('current',{'packages':['corechart','line']});
google.charts.setOnLoadCallback(priceChart);

const URL = "https://docs.google.com/spreadsheets/d/1_WuRPqGhuuj7lGJn286_oU35kgUaMZ-fwpEzKART9L8/gviz/tq?sheet=통합&headers=1&range=A1:B200&tq=";

"https://docs.google.com/spreadsheets/d/1_WuRPqGhuuj7lGJn286_oU35kgUaMZ-fwpEzKART9L8/edit?usp=sharing"

function priceChart(){
  let query = new google.visualization.Query(URL);
  query.send(handleQueryResponse);
}

function handleQueryResponse(response){
  if (response.isError()){
    alert('Error in query:'+response.getMessage()+' '+response.getDetailedMessage());
    return;
  }
  let data = response.getDataTable();
  let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  let options = {
    hAxis:{
      title: 'Time'
    },
    vAxis:{
      title: 'Price'
    }
  }
  chart.draw(data,options);
}
