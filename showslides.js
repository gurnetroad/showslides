function counter () {
    var index = 0; 
    var slideno = $("body").data("backstretch").index + 1;
    var nslides = $("body").data("backstretch").images.length;
    $("#current").html(slideno);
    $("#total").html(nslides);
}
function showslides () {
	
	var i, fnindex;
	var imagearray = [];
	var imgurl = [];
	var baseurl = Data.p1;
	var nimages = Data.p2;
	
	// Base urls set by pages, filenames start at 1...
	for (i=0; i<nimages; i++) {
		fnindex=i+1;
		imgurl.push(baseurl + fnindex + '.jpg');
	}
	
	$('body').backstretch(imgurl, {duration: 3000, fade: 750});


	$(window).on("backstretch.show", function () {
		$("#loading").hide();
	});

    // Pause slideshow 
    $('body').data('backstretch').pause();
    counter();
	
/*	Fade navbar, controls after load
    setTimeout(function () {
        $(".navbar").fadeOut();
        $("#project-description").fadeOut();
        $(".content-info").fadeOut();
    }, 3000);
*/
    $('.right').click(function(x) {
        x.preventDefault();
        $('body').data('backstretch').next();
		counter();
    });

    $('#small-next').click(function(x) {
        x.preventDefault();
        $('body').data('backstretch').next();
		counter();
    });
        
    $('.left').click(function(x) {
        x.preventDefault();
        $('body').data('backstretch').prev();
		counter();
    });
        
    $('#small-prev').click(function(x) {
        x.preventDefault();
        $('body').data('backstretch').prev();
		counter();
    });

	// bind left/right arrows
	$('body').keydown(function(e){
		switch(e.which) {
			case 37: $('body').data('backstretch').prev(); // left
			counter();
			break;
			
			case 39: $('body').data('backstretch').next(); // up
			counter();
			break;
			
			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});

		
    $('backstretch').hammer().on('dragstart', {drag_min_distance : 500},  function(event){
        if (event.gesture.direction === "left") {
            $('body').data('backstretch').prev();
        } else {
            $('body').data('backstretch').next();
        }
        counter();
    });

// show/hide everything except arrows on tap

    $(".backstretch").hammer().on('tap',function(event){
        	$('.navbar').toggle();
        	$('#project-description').toggle();
        	$('.content-info').toggle();
    });
/*    
	$( ".backstretch" ).mouseenter(function() {
        $('.navbar').fadeIn( );
         $('#project-description').fadeIn();       
	});
	$( ".backstretch" ).mouseleave (function() {
		$('.navbar').fadeOut();
         $('#project-description').fadeOut();       		
	});


	$( "#project-controls-wrap" ).mouseenter(function() {
		$("#project-description" ).show(200);
		$(".content-info").show("fast");
	});
	$( "#project-controls-wrap" ).mouseleave(function() {
		$("#project-description" ).hide(200);
		$('.content-info').hide("fast");
	});
*/
}