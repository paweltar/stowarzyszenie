$(document).ready(function() {
	$('.hamburger').click(function() {
		$('.nav-links').toggleClass("visibility");
		$('#home').toggleClass("add-padding-bottom");

		if($(window).width() < 800) {
			$('.nav-links').addClass("mobile-style");
		} else {
			$('.nav-links').removeClass("mobile-style");
		}
	});
});
