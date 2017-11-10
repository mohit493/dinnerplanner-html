
var DishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction

	var Dish = model.getDish(100);
	var numOfGuest = model.getNumberOfGuests();

	var dishInfoDisplay = '';
	var numOfGuestsInfo = '';

	this.dishInfoTop = container.find('#dishInfoTop');
	this.dishInfoBottom = container.find('#dishInfoBottom');
	this.numOfGuests = container.find('#numOfPeopless');

	console.log(this.numOfGuests);
	
	dishInfoDisplay = '<div><h2>' + Dish.name + '</h2> <br> <img src="images/' + Dish.image + '" alt = "'+Dish.name+'"> <br> <br> <h3>Preperation</h3><p>'+ Dish.description + '</p></div>';
	numOfGuestsInfo = '<b>' + numOfGuest + '</b>';

	this.dishInfoTop.html(dishInfoDisplay);
	this.numOfGuests.html(numOfGuestsInfo);

	console.log(numOfGuestsInfo);

	
	
	
}
 
