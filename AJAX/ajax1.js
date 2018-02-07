const xhr = new XMLHttpRequest();
const url = 'http://apis.data.go.kr/1611000/BldRgstService/getBrBasisOulnInfo?sigunguCd=11680&bjdongCd=10300&bun=0012&ji=0000&ServiceKey=8PZnRzZb4yXsXJQVBDX74xuf8kHhF4cmY5XnEO9apteNWtahGwpA9%2FjrthHB0tX7GBlm9zN1A%2F0rKCx3wGe27g%3D%3D'

xhr.responseType = 'json';
xhr.onreadystatechange =function(){
  if(xhr.readyState=== XMLHttpRequest.DONE){

  }
}

xhr.open('GET',url);
xhr.send();
