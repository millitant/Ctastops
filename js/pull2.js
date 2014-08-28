$.getJSON('js/busstops.json', function(busstops){  
  $('#busstoplist').empty();
  
  $.each(busstops, function(i,busstop){
      $('#busstoplist').append(generateBusstop(busstop));
   });
   
   $('#busstoplist').listview('refresh');
   
});

function generateBusstop(busstop){

    return'<li><a href="javascript:void(0)'
           + '"onclick="goToStopDetailPage(\''
           + busstop.stop_name
           +'\',\''
           + busstop.stop_descriptive_name +'\')">'
           + busstop._stop_name
           + '</a></li>';
}

function goToStopDetailPage(busstopName){

    //create the page html template
   var stopPage =$("<div data-role='page' data-url=station><div data-role='header'><h1>"
                  + stopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
                  + stopName + "</h4></div></div>");
                  
//append the new page to the page container
stopPage.appendTo( $.mobile.pageContainer );

//go to the newly create page
$.mobile.changePage(stopPage);
}