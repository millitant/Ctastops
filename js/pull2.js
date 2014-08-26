$.getJSON('http://data.cityofchicago.org/resource/mw4h-s8xu.json', function(busstops){  
  $('#busStoplist').empty();
  
  $.each(busstops, function(i,busStop){
      $('#busStoplist').append(generateBusStopLink(busStop));
   });
   
   $('#busStoplist').listview('refresh');
   
});

function generateBusStopLink(busStop){

    return'<li><a href="javascript:void(0)'
           + '"onclick="goToStopDetailPage(\''
           + busStop.cta_stop_name
           +'\',\''
           + busStop.station_descriptive_name +'\')">'
           + busStop.cta_stop_name
           + '</a></li>';
}

function goToStopDetailPage(stopName){

    //create the page html template
   var stopPage =$("<div data-role='page' data-url=station><div data-role='header'><h1>"
                  + stopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
                  + stopName + "</h4></div></div>");
                  
//append the new page to the page container
stopPage.appendTo( $.mobile.pageContainer );

//go to the newly create page
$.mobile.changePage( stopPage);
}