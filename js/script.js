function changeQuote(id){
	$.get("https://quotes.herokuapp.com/libraries/math/random", function(data) {
		$(id).html(data);
	});
}
$(function() {
	changeQuote('#quote');
	$("#new-quote").click(function(){
		changeQuote('#quote');
	});	
});