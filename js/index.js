$(document).ready(function() {
	$('.hamburger').click(function() {
		$('.nav-links').animate({ opacity: 'toggle' });
    $('#home').toggleClass("add-padding-bottom");
	});
});
