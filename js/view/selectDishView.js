
var SelectDishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
  	this.title = container.find("#titleTest");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	console.log(model.addDishToMenu(201));

	this.title.html(Selected);
	


	this.numberOfGuests.html(model.getNumberOfGuests());
	
}
 
