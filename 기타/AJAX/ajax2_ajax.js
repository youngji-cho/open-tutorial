$.ajax({
  url : 'https://api-to-call.com/endpoint',
  type : 'GET',
  dataType : 'json',
  success(response){
    console.log(response);
  },
  error(jqXHR,status,errorThrown){
    console.log(jqXHR);
  }
});

$.ajax({
  url : 'https://api-to-call.com/endpoint',
  type : 'GET',
  data : JSON.stringfy({id:200]}),
  dataType : 'json',
  success(response){
    console.log(response);
  },
  error(jqXHR,status,errorThrown){
    console.log(jqXHR);
  }
});
