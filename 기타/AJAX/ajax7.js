var userURL = "http://사용자페이지URL";
function fncGeoCode() {
	var url = userURL + "/AjaxRequest.jsp?getUrl=";
	var subURL = "http://sgis.kostat.go.kr/OpenAPI2/geocoder.do?serviceKey="+ document.getElementById("serviceKey").value;
	subURL += "&type=2";
	subURL += "&sido="+encodeURIComponent(document.getElementById("sido").value);
	subURL += "&sigungu="+encodeURIComponent(document.getElementById("sigungu").value);
subURL += "&dong="+encodeURIComponent(document.getElementById("dong").value);
subURL += "&jibun="+document.getElementById("jibun").value;
	url += encodeURIComponent(subURL);
	$.ajax({
	 "url" : url,
	"type" : "GET",
	"success" : function(result) {
	      if(result == null || result == ""){
		alert("해당 주소로 얻을수 있는 좌표가 없습니다. 주소값을 다시 입력하세요");
	      }else{
		$.each(result, function(i,value){
	  	  if(result.data == null ){
		       if(i==0){
			$("#x_coords").attr("value",value.posX);
$("#y_coords").attr("value",value.posY);
			$("#address").attr("value", value.address);
		      }
		   }
	             });
	      }
	},
	"async" : "false",
	"dataType" : "json",
	"error": function(x,o,e){
		alert(x.status + ":" +o+":"+e);
	}
	});
}
