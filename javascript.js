window.onload = window.onload = function() {
	buildHeader();
};


function buildHeader(){

	var pages = ["Home", "Charts", "Lessons"];	


	var inner = "<div id='Top-Bar' class='top-bar'>" +
					"<div class='top-bar-left'>" +
						"<ul class='menu'>" +
							"<li class='menu-text'>Greenhills GRED Project</li>" +
						"</ul>" +
					"</div>" +
					"<div class='top-bar-right'>" +
						"<ul class='menu'>";

	for(var i=0; i<pages.length; i++){
		inner += 			"<li><a href='#'>" + pages[i] + "</a></li>";
	}

	inner += 			"</ul>" +
					"</div>" +
				"</div>";


	var headerElement = document.getElementById("header");
	headerElement.innerHTML = inner;

}