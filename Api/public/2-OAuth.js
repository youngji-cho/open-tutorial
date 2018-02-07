function handleClientLoad(){
  gapi.load('client:auth2',initClient);
}

function initClient(){
  gapi.client.init({
    apiKey: 'AIzaSyCL4sf6WOiH24ZiSeot7_HbsAvHL50fueU',
    discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
    clientId: '588354176064-upuja4ih0lberju4lagbh2fbbsbo80bd.apps.googleusercontent.com',
    scope: 'profile'
  }).then(function(){
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

function updateSigninStatus(isSignedIn){
  if (isSignedIn){
    makeApiCall();
  }
}

function handleSignInClick(event){
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

function makeApiCall(){
  gapi.client.people.people.get({
    'resourceName': 'people/me',
    'requestMask.includeField': 'person.names'
  }).then(function(response) {
    console.log('Hello, ' + response.result.names[0].givenName);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
}
