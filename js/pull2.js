$.getJSON('http://data.cityofchicago.org/resource/mw4h-s8xu.json', function(busstops){  
  $('#busStoplist').empty();
  
  $.each(lstops, function(i,busStop){
      $('#busStoplist').append(generateLStopLink(lstop));
   });
   
   $('#busStoplist').listview('refresh');
   
});

function generateLStopLink(busStop){

    return'<li><a href="javascript:void(0)'
           + '"onclick="goToStopDetailPage(\''
           + lstop.stop_name
           +'\',\''
           + lstop.station_descriptive_name +'\')">'
           + lstop.stop_name
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