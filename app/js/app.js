window.onload=function(){
	
	page('inbox');
}
function page(a) {
	if (a == "inbox") {
		$("#main").load("html/Inbox.html");

	} else {
		$("#main").load("html/Other.html");
	}

}

function changeClass() {

	$(".sidedrawer").toggleClass('phonedrawer');
};