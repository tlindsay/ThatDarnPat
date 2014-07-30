/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/


// JS functions and initiations go here...

$(document).ready(function(){
	var location = document.location.hash.substring(1);
	if(location){
		location = location.toLowerCase();
		console.log(location);
		switch(location){
			case 'home':
				home(); break;
			case 'resume':
				resume(); break;
			default:
				home();
		}
	}else{
		home();
	}
});

function clearContent(){
	$('#content').html('');
}

function home(){
	clearContent();
	$('#content').load('assets/html/home.html#content');
}

function resume(){
	clearContent();
	$('#content').load('assets/html/resume.html');
}
