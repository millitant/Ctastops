$.getJSON('http://data.cityofchicago.org/resource/mw4h-s8xu.json', function(ctamap){  
  $('#ctamap').empty();
  
  $.each(ctamap, function(i,ctaMap){
      $('#ctamap').append(generateLStopLink(ctamap));
   });
   
   $('#ctamap').listview('refresh');
   
});

function generateCtaMapLink(ctamap){

    return'<li><a href="javascript:void(0)'
           + '"onclick="goToStopDetailPage(\''
           + ctamap.stop_name
           +'\',\''
           + ctamap.station_descriptive_name +'\')">'
           + ctamap.stop_name
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