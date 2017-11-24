const apiKey= "AIzaSyAhMOmH-SgGoNFR4vWj_k_SyR0wjxjSfYQ";
const url = 'https://www.googleapis.com/urlshortener/v1/url';

const $inputField = $('#address');
const $expandButton =$('#expand');
const $shortenButton =$('#shorten');
const $responseField = $('#responseField');

async function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey ;

  fetch(urlToExpand).then(response=>{
    if (response.ok){
      return response.json();
    }
    throw new Error('Request failed');
  },networkError =>console.log(networkError.message)).then(jsonResponse=>{

  });

async function shortenUrl() {
  const urlToShorten = $inputField.val();
  let urlWithKey = url + '?key' + apiKey;
  try {
    let response = await fetch(urlWithKey,{
      method : 'POST'.
      header : {
        "Content-type": "application/json"
      },
      body: JSON.stringfy({
        longUrl: urlToShorten
      })


    });
    if (response.ok){
      let jsonResponse = await response.json();
      $responseField.append('<p> Your shortened url is <p></p>' + jsonResponse.id + '</p>');
      return jsonResponse;
    }
    throw new Error('Request Failed');
  } catch(error){
    console.log(error);
  }
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

// Call the functions when the appropriate button is clicked

$expandButton.click(expand);
$shortenButton.click(shorten);
