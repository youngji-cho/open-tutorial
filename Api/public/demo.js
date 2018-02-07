const clientID = '588354176064-upuja4ih0lberju4lagbh2fbbsbo80bd.apps.googleusercontent.com'	;
const scopes = 'https://spreadsheets.google.com/feeds';

function init(){
  gapi.auth.authorize(
    {client_id:clientID, scope:scopes, immediate: true},handleAuthResult);
}

async function handleAuthResult(authResult){
  let authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error){
    authorizeButton.style.visibility= 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick= handleAuthClick;
  }
}

function handleAuthClick(event){
  gapi.auth.authorize(
    {client_id:clientID, scope:scopes, immediate: false},handleAuthResult);
  return false;
}


async function makeApiCall(){
  let tqUrl= 'https://docs.google.com/spreadsheets/d/1_WuRPqGhuuj7lGJn286_oU35kgUaMZ-fwpEzKART9L8/gviz/tq'+'tqx=responseHandler:handleTqResponse'+'&access_token'+ encodeURIComponent(gapi.auth.getToken().access_token);
  document.write('<script src="' + tqUrl +'" type="text/javascript"></script>');
}

function handleTqResponse(resp) {
  document.write(JSON.stringify(resp));
}
