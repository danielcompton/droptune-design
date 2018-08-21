$(function() {

	// Mobile Menu
	$('#mobile-menu').on('click', function(e){
		e.preventDefault();
		$('nav').toggleClass('show');
	});

	$(window).resize(function(){
		if ($('body').width() > 910) {
		    $('nav').removeClass('show');
		}
	});

	// Dark Mode
	$('#dark-mode').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('dark');
	});

});
