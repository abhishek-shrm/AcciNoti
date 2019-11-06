var ltd_1=2.0;
var lngtd_1=2.0;
var places="hospitals"
var x=document.getElementById('demo');
var pl;
var nearplaces;

function display_near_by_result(data) {
    details = [];
    var result_string = '<div style="font-size: 13px">\n\
            <ul style="list-style-type:decimal;color:green; padding:2px 2px 0 30px">';
    var num = 1;
    /*show the item data*/
    data.forEach(function (item) {
        if (item != '' && item != null && item != "undefined") {
            var lng = item.longitude;
            var lat = item.latitude;
            var pos = new L.LatLng(lat, lng);/***position of marker*****/
            var content = new Array();
            if (item.eLoc != '')
                content.push('<table class="table is-striped is-bordered"><tbody><tr><td>eLoc</td><td width="10px">:</td><td>' + item.eLoc + '</td></tr>');
            if (item.placeName != '')
                content.push('<tr><td>placeName</td><td width="10px">:</td><td width="70%" style="word-wrap: break-word;">' + item.placeName + '</td></tr>');
            if (item.placeAddress != '')
                content.push('<tr><td>placeAddress</td><td width="10px">:</td><td style="width: 75% !important; word-wrap: break-word;">' + item.placeAddress + '</td></tr>');
            /*if (item.type != '')
                content.push('<tr><td >type</td><td width="10px">:</td><td>' + item.type + '</td></tr>');
            if (item.latitude != '')
                content.push('<tr><td >latitude</td><td width="10px">:</td><td>' + item.latitude + '</td></tr>');
            if (item.longitude != '')
                content.push('<tr><td >longitude</td><td width="10px">:</td><td>' + item.longitude + '</td></tr>');*/
            if (item.distance != '')
                content.push('<tr><td >distance</td><td width="10px">:</td><td><strong>' + item.distance + 'm</strong></td></tr><tr><td></td><td></td></tr></tbody></table>');
            details.push(content.join(""));
            nearplaces.innerHTML=details;
            //alert(details);
            //show_markers(num, pos);/**display markers***/
            //result_string += '<li onclick="show_place_details(' + (num++) + ',' + lng + ',' + lat + ')">' + item.placeName + '  ('+item.distance+')'+'</li>';
        } else {
            var error_response = "Not found.";
            pl.innerHTML = error_response + '</ul></div>';/***put response result in div****/
        }
    });
    pl.innerHTML = result_string + '</ul></div>';/***put geocode result in div****/
    //mapmyindia_fit_markers_into_bound(); /***fit map in marker area***/
}

function getUrlResult(keyword, lat, lng) {
               //remove_btn();
               //add_btn(lat, lng);
               //alert(keyword+"--"+lat+"--"+lng);
			   if(keyword=="hospitals")
					{pl=document.getElementById('resultHospital');
				      nearplaces=document.getElementById('placesHospital');}
				else
				{	pl=document.getElementById('resultPolice');
					nearplaces=document.getElementById('placesPolice');
				}
               $.post("https://accidentreport.000webhostapp.com/apis/getResponse.php",{
                       query: JSON.stringify(keyword),
                       current_lat: JSON.stringify(lat),
                       current_lng: JSON.stringify(lng)
                   },
                   function(result) {
                       var resdata = JSON.parse(result);
                       var jsondata;
                       console.log(resdata);
                       //alert("dara:  \n"+resdata.data);
                       if (resdata.status == 'success') {
                           try {
                               jsondata = JSON.parse(resdata.data);
                               //alert(jsondata);
                           } catch (e) {
                               var error_response = "No Result"
                               pl.innerHTML = error_response + '</ul></div>';
                               return false;
                           }

                           if (jsondata.suggestedLocations.length > 0) {
                               /*success*/
                               display_near_by_result(jsondata.suggestedLocations);/*display results on success*/
                           }
                           /*handle the error codes and put the responses in divs.Error codes can be found in the documentation*/
                           else {
                               var error_response = "No Result"
                               pl.innerHTML = error_response + '</ul></div>';/***put response result in div****/
                           }
                       } else {
                           var error_message = resdata.data;
                           pl.innerHTML = error_message + '</ul></div>';/***put response result in div****/
                           //remove_markers();
                       }
               });
           }
function get_near_by_result(lat, lng, searchmethod) {
                            //getLocation();
                            var keyword = searchmethod;
                            if (searchmethod == 'searchbykeyword') {
                                if (keyword.value == '') {
                                    keyword.focus();
                                    return false;
                                }
                            }
							if(keyword=="hospitals")
							  {pl=document.getElementById('resultHospital');}
							else
								pl=document.getElementById('resultPolice');
								
                            
							pl.innerHTML = '<div style="padding: 0 12px; color: #777">Loading..</div>';
                                /*get JSON resp*/
                                if(lat=='' || lng=='')
                                {
                                    //var map_center = map.getCenter();
                                    getUrlResult(keyword, lat, lng);
                                }
                                else
                                {
                                    getUrlResult(keyword, lat, lng);
                                }
                        }

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

    //alert(lngtd);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  //alert(ltd);
  ltd_1=position.coords.latitude;
  lngtd_1=position.coords.longitude;
  //x.innerHTML = "Latitude: " + position.coords.latitude +
  //"<br>Longitude: " + position.coords.longitude;

  //  get_near_by_result(28.8237984, 77.1503382, places);

}

getLocation();


function nearByPlaces(placeSearch)
{
  places=placeSearch;
  document.getElementById("placesearched").innerHTML="Near By "+places;
  get_near_by_result(ltd_1, lngtd_1, places);
}

function getAddress()
{
  $.post("emergencyCall.php",{latd:ltd_1,lngtd:lngtd_1},function(data, status){
  alert(data);

  });
}


function BingAddress2()
{
  $.get("https://accidentreport.000webhostapp.com/apis/emergencyCall.php",{latd:ltd_1, lngtd:lngtd_1},
  function(data2){
    //var x=JSON.parse(data);
    alert(data2);
    if(data2=="success")
    {
      alert("Emergency Alert Sent");
    }
    else {
      alert("Alert Failed");
    }

  });
}
