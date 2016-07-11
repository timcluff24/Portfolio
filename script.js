$(document).ready(function() {
    $('.dropDown ul').slideUp(50);

    $('.dropBtn').click(function() { 
    	if($(this).hasClass("rotate")){
    		$(this).removeClass("rotate");
    		$(this).addClass("rotateBack");
    	} else {
    		$(this).removeClass("rotateBack");
    		$(this).addClass("rotate");
    	}
        $('.dropDown ul').slideToggle("slow");
        $(this).stop();
    });
});