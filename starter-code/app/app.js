//pull from api and load page with info
$.get("https://den-super-crud.herokuapp.com/books").done(function(data) {
    console.log(data);
    	//loop through and get infe through index and val.somgthing
    	$.each(data.books, function( i, val) {
			$("#books").append("<li>" + val.title + "<br>" + val.author + "<br>" +
		 	val.releaseDate + "<br>" + "<img src= '" + val.image + "' >" + "</li>");		
		});
});

	//form submit section 
	$("#newBook").on("submit", function(event){
		// Stop the form from submitting
		event.preventDefault();
		console.log("I've been clicked!");

		var formTitle = $("#book-title").val();		
		var formAuthor =  $("#book-author").val();
		var formReleaseDate =  $("#book-release-date").val();
		var formImage =  $("#book-image").val();
		//new book object.
		var newBook = {
			// title here
			title : formTitle,
			// author here
			author: formAuthor,
			// image URL here
			image: formImage,
			// release date here
			releaseDate: formReleaseDate
		};
		console.log(formTitle);	
		console.log(formAuthor);	
		console.log(formReleaseDate);	
		console.log(formImage);	
						
	// $.post("https://den-super-crud.herokuapp.com/books", newBook);

		//post to screen using ajax an d success function to post to page. 
		$.ajax({
  			type: "POST",
 			url: "https://den-super-crud.herokuapp.com/books",
 			data: newBook,
 			success: function() {
      			$("#books").append("<li>" + formTitle + "<br>" + formAuthor + "<br>" +
		 	formReleaseDate + "<br>" + "<img src= '" + formImage + "' >" + "</li>");		
			}
		});			     
    });

