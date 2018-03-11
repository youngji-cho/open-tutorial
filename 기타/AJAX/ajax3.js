const xhr = XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';

xhr.responseType= 'json';
xhr.onreadystatechange = function (){
  if (xhr.readyState===XMLHttpRequest.DONE){

  }
};

xhr.open('GET',url);
xhr.send()
//
const xhr = XMLHttpRequest();
const url= 'http://api-to-call.com/endpoint';
const data = json.stringify({id:'200'});

xhr.onreadystatechange=function(){
  if(xhr.readyState===XMLHttpRequest.DONE){
  }
}
xhr.open('POST',url);
xhr.send(data);

$.ajax({
  url:'http://api-to-call.com/endpoint',
  type:'GET',
  dataType:'json',
  success(response){

  },
  error(jqXHR,status,errorThrown){

  }
});

$.ajax({
  url:'http://api-to-call.com/endpoint' ,
  type: 'POST'
  data:JSON.stringify()
  dataType: json,
  success(response){

  },
  error(jqXHR,status,errorThrown){

  }
})

fetch('http://api-to-call.com/endpoint').then(response=>{
  if(response.ok){
    return response.json()
  }
  throw new Error('Request Failed!')
},networkError=>console.log(networkError.message)
).then(jsonResponse=>{


});

fetch('http://api-to-call.com/endpoint',{
  method:'POST',
  body:JSON.stringify({'id:200'})
}).then(response=>{
  if(response.ok){

  }
},networkError=>console.log(networkError);
).then(jsonResponse=>{


});

async function getData(){
  let response = await fetch('http://api-to-call.com/endpoint')

  try (response.ok){
    let jsonResponse= await response.json();
  }
  throw new Error('Request Failed!');
  } catch(error){
    console.log(error);
  }
}

const apiKey = 'b7b51c8161564070a8e44456180501';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=b7b51c8161564070a8e44456180501&q=';


















































































const clientId = '2Z2QU4SG2JIBF44CDTFNK0N5H55MTSWBY4251DCM2TKT4UJQ';
const clientSecret = 'C02KBC2SGNXE4P0UQI3NPIQZTUQNOIOJV2PBKJ0XPIQTSKKJ';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';














"https://api.foursquare.com/v2/venues/explore?near=Seoul&venuePhotos=1&limit=5&client_Id=2Z2QU4SG2JIBF44CDTFNK0N5H55MTSWBY4251DCM2TKT4UJQ&client_secret=C02KBC2SGNXE4P0UQI3NPIQZTUQNOIOJV2PBKJ0XPIQTSKKJ&v=20180103"
