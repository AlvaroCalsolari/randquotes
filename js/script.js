function changeQuote(id){
  let button = $("#new-quote span");
  button.text('Loading...');
	$.get("https://quotes.herokuapp.com/libraries/math/random", function(data) {
		$(id).html(data);
		button.text('Generate New Quote');
	});
}

function getQuote(){
	return $("#quote").text();
}

function tweetForMe(){
	let url 		= "https://twitter.com/intent/tweet";
	let text		= getQuote();
	let hashtag = "randQuote";
	let via 		= "randomQuotes";
	window.open(url+"?text="+text+";hashtags="+hashtag+";via="+via,"" , "width=500,height=300");
}

$(function() {
	$("body").fadeIn(4000).removeClass("hidden");
	changeQuote('#quote');
	$("#new-quote").click(function(){
		changeQuote('#quote');
	});
	$("#tweet").click(function(){
		tweetForMe();
	});	
});
