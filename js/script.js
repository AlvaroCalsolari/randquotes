$(function() {
	$.get("https://quotes.herokuapp.com/libraries/math/random", function(data) {
		$("#quote").html(data);
	});
});