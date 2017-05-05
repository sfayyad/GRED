window.onload = window.onload = function() {
	buildHeader();
	buildFooter();
};


function buildHeader(){


	var names = ["Home", "Charts", "Lessons", "Resources", "About"];	
	var pages = ["index", "ChartsPage", "LessonsPage", "resources", "About"]

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

function buildFooter(){

	var row = document.createElement("div");
		row.className = "row";

	var col = document.createElement("div");
		col.className = "small-12 columns";
	
	var inner = "<p> Contact Us at  a3l3s@greenhillsschool.org </p>";
	
	
	col.innerHTML = inner;
	row.appendChild(col);
	document.body.appendChild(row);

}