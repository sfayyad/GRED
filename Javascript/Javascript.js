
/*
This is the main method that our website will be build out of. 
*/
function buildPage(){

	//The page has two major components: the top header, and the regular content. Here, a container-div for both of the will be created

	var siteContainer = document.getElementById("site-container"); 					//This is the site-container. First a container div for the header will be added.

		var headerContainer = document.createElement("div"); 						//A container-div is created.
			headerContainer.id = "header-container";								//This gives the container a name.
			headerContainer.className = "row";										//This tells Foundation that this is a new row on our webpage.

		siteContainer.appendChild(headerContainer);									//Adds a the header container div that we created to the actual webpage.


		var contentContainer = document.createElement("div"); 						//A container-div is created.
			contentContainer.id = "content-container";								//This gives the container a name.
			contentContainer.className = "row";										//This tells Foundation that this is a new row on our webpage.

		siteContainer.appendChild(contentContainer);								//Adds a the content container div that we created to the actual webpage.


	//OK, so now we have two container-divs: one for the header and one for the content.

	buildHeader(); //This is the method that will build the header. Whomever is working on the header should work in this method.

	buildContent(); //This is the method that will build the content. Whomever is working on the content should work in this method.

}

// Builds the header.
function buildHeader(){

}


//Builds the content.
function buildContent(){

}