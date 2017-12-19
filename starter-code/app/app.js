//pull from api and load page with info
$.get("https://den-super-crud.herokuapp.com/books").done(function(data) {
    console.log(data);
    	$.each(data.books, function( i, val) {
			$("#books").append("<li>" + val.title + "<br>" + val.author + "<br>" +
		 	val.releaseDate + "<br>" + "<img src=" + val.image + ">" + "</image> </li> <br>");		
		});
});

//form submit section 
$("form").on("submit", function(event){
		    // Stop the form from submitting
			event.preventDefault();
	console.log("I've been clicked!");
  	alert( "Handler for .click() called." );
});