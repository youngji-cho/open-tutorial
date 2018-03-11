function start(){
  gapi.client.init({
    'apiKey':'AIzaSyCL4sf6WOiH24ZiSeot7_HbsAvHL50fueU',
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
  }).then(function(){
    return  gapi.client.language.translations.list({
      q: 'hello world',
      source: 'en',
      target: 'de',
    });
  }).then(function(response){
     console.log(response.result.data.translations[0].translatedText);
  },function(reason){
    console.log('Error: ' + reason.result.error.message);
  });
};

gapi.load('client',start);
