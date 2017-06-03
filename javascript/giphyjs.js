// JavaScript Document

$(document).ready(function () {
	//	renderbuttons();
	var travel = ["Australia", "Indonesia", "Greece", "Thailand"];



	function displayCountry() {

		var name = $(this).attr("data-place");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q= " + name + "&limit=10&api_key=dc6zaTOxFJmzC";

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function (response) {
			$("#location-display").empty();

			$(".animate").on("click", function () {

				gif.attr("src", response.data[j].images.fixed_height_still.url);
				//			
			});

			for (var j = 0; j < response.data.length; j++) {

				var gif = $("<img>");
				gif.addClass("animate");
				console.log(response);
				gif.attr("src", response.data[j].images.fixed_height_still.url);
				gif.attr("src", response.data[j].images.fixed_height.url);

				console.log(response.data[j].images.fixed_height_still.url);

				$("#location-display").prepend(gif);


			}


		});
	}




	function renderbuttons() {

		$("#location-names").empty();

		for (var i = 0; i < travel.length; i++) {
			// Then dynamicaly generating buttons for each country in the array

			var a = $("<button>");
			// Adding a class of movie to our button
			a.addClass("location");
			// Adding a data-attribute
			a.attr("data-place", travel[i]);
			// Providing the initial button text
			a.text(travel[i]);
			// Adding the button to the location-names div
			$("#location-names").append(a);
		}
	}
	renderbuttons();

	$("#add-location").on("click", function (event) {
		event.preventDefault();

		var name = $("#travel-input").val();
		travel.push(name);
		renderbuttons();

	});


	$(document).on("click", ".location", displayCountry);

	// Calling the renderButtons function to display the intial buttons
	//	callback function waits until the user does something. when you put a () then it calls the function right away

});