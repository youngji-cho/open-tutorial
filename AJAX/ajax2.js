const xhr =new XMLHttpRequest();
const url ='http://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange =function(){
  if (xhr.readyState===XMLHttpRequest.DONE){

  }
}
//
const xhr = XMLHttpRequest();
const url ='http://api-to-call.com/endpoint';
const data = JSON.stringify({id:'200'});

xhr.responseType ='json'
xhr.onreadystatechange= function(){
  if(xhr.readyState===XMLHttpRequest.DONE){

  }
}
//
$.ajax({
  url: 'http://api-to-call.com/endpoint',
  type :'GET',
  dataType : 'json',
  success(response){
  },
  error(jqXHR, status, errorThrown){
  }
});
//
$.ajax({
  url:'http://api-to-call.com/endpoint',
  type: 'POST',
  data : JSON.stringify({id:'200'}),
  dataType: 'json',
  success(response){

  },
  error(jqXHR, status,errorThrown){

  }
})
//
fetch('http://api-to-call.com/endpoint').then(response=>{
  if (response.ok){
    return response.json();
  }
  throw networkError('Request failed!');
},networkError=>console.log(networkError.message)
).then(jsonResponse=>{


});

fetch('http://api-to-call.com/endpoint',{
  method:'POST',
  body: JSON.stringify({id:'200'})
}).then(response=>{
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!')
},networkError=>console.log(networkError.message)
}).then(jsonResponse=>{

})

async function getData(){
  try{
    let response = await fetch('http://api-to-call.com/endpoint')
    if(response.ok){
      let jsonResponse= await response.json();
      //
    }
    throw new Error('Request Failed!')
  } catch(error){
    console.log(error);
  }
}

async function getData(){
  try {
    let response= await fetch('http://api-to-call.com/endpoint',{
      method : 'POST',
      body : JSON.stringify({id: '200'})
    });
    if (response.ok){
      let jsonResponse = await response.json();
    }
  } catch (error){
    console.log(error);
  }
}
