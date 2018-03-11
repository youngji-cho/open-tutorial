async function getData(){
  try {
    let response = await fetch('http://api-to-call.com/endpoint');
    if (response.ok){
      let jsonResonse = await response.json();
    }
    throw new Error('Request Failed!');
  } catch (error){
    console.log(error);
  }
}

async function getData(){
  try {
    let response = await fetch('http://api-to-call.com/endpoint',{
      method: 'POST',
      body: JSON.stringfy({id:'200'})
    });
    if (response.ok){
      let jsonResponse = await response.json();
    }
    throw new Error('Request Failed!');
  } catch (error){
    console.log(error);
  }
}
