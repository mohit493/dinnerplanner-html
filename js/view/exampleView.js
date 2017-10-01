//ExampleView Object constructor
var ExampleView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	console.log(model.getFullMenu());
	console.log(model.removeDishFromMenu(2));
	console.log(model.getFullMenu());


	this.numberOfGuests.html(model.getNumberOfGuests());
	
}
 
