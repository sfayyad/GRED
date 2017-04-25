window.onload = window.onload = function() {
	buildHeader();
};


function buildHeader(){


	var names = ["Home", "Charts", "Lessons", "Resources"];	
	var pages = ["index", "ChartsPage", "LessonsPage", "resources"]

	var element = document.createElement("div");
		element.id = "Top-Bar";
		element.className = "top-bar";

	var inner =
			"<div class='top-bar-left'>" +
				"<ul class='menu'>" +
					"<li class='menu-text'>Greenhills GRED Project</li>" +
				"</ul>" +
			"</div>" +
			"<div class='top-bar-right'>" +
				"<ul class='menu'>";

	for(var i=0; i<pages.length; i++){
		inner += 	"<li><a href='" + pages[i] + ".html'>" + names[i] + "</a></li>";
	}

	inner += 	"</ul>" +
			"</div>";


	element.innerHTML = inner;

	document.body.insertBefore(element, document.body.firstChild);

}
