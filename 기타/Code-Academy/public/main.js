
// Foursquare API Info
const clientId = '2Z2QU4SG2JIBF44CDTFNK0N5H55MTSWBY4251DCM2TKT4UJQ';
const clientSecret = 'C02KBC2SGNXE4P0UQI3NPIQZTUQNOIOJV2PBKJ0XPIQTSKKJ';
const url = 'https://api.foursquare.com/v2/venues/explore';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

//APIXU Info
const apiKey = '01633825557a4e2ab0e03756171810';
const forecastUrl = ' '

const $input =$('#city');
const city =$input.val();

const $submit=$('#button');
const $destination=$('destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const city =$input.val();
const urlToFetch = url + city + '&venuePhotos=1&limit=10&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20170305';

async function getVenues(){


};
