const url = "http://apis.data.go.kr/1611000/BldRgstService/getBrBasisOulnInfo";

const sigunguCd = $('#sigungu_input'); //11680
const bjdongCd= $('#bjdong_input'); //10300
const bunCd= $('#bun_input'); //0012
const jiCd=$('#ji_input'); //0000

const ServiceKey = '8PZnRzZb4yXsXJQVBDX74xuf8kHhF4cmY5XnEO9apteNWtahGwpA9%2FjrthHB0tX7GBlm9zN1A%2F0rKCx3wGe27g%3D%3D';

async function getbuilding(){
  const total_url='http://apis.data.go.kr/1611000/BldRgstService/getBrBasisOulnInfo?sigunguCd=11680&bjdongCd=10300&bun=0012&ji=0000&ServiceKey=8PZnRzZb4yXsXJQVBDX74xuf8kHhF4cmY5XnEO9apteNWtahGwpA9%2FjrthHB0tX7GBlm9zN1A%2F0rKCx3wGe27g%3D%3D';

  try{
    let response = await fetch(total_url);
   		console.log(response);
      if(response.ok){
      }
    	throw new Error('Request Failed!');
   }
   catch(error){
    console.log(error);
  }
}

/*const total_url=`${url}?sigunguCd=${sigunguCd}&bjdongCd=${bjdongCd}&bun=${bunCd}&ji=${jiCd}&ServiceKey=${ServiceKey}`;*/
