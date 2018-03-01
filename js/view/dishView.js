
var DishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction

	var Dish = model.getDish(100);
	var numOfGuest = model.getNumberOfGuests();
	var totalPrice = model.getTotalMenuPrice();

	var dishInfoDisplay = '';
	var numOfGuestsInfo = '';
	var ingredientsInfo = '';
	var totalpriceInfo = '';

	

	this.dishInfoTop = container.find('#dishInfoTop');
	this.dishInfoBottom = container.find('#dishInfoBottom');
	this.numOfGuests = container.find('#numOfPpl');
	this.ingredientsList = container.find("#ingredientsList");
	this.totalprice = container.find("#totalPrice");

	
	
	dishInfoDisplay = '<div><h2>' + Dish.name + '</h2> <br> <img src="images/' + Dish.image + '" alt = "'+Dish.name+'"> <br> <br> <h3>Preperation</h3><p>'+ Dish.description + '</p></div>';
	numOfGuestsInfo = '<b>' + numOfGuest + '</b>';
	totalpriceInfo = '<p>'+totalPrice+'</p>';

	for(var i = 0; i < Dish.ingredients.length; i++)
	{
		ingredientsInfo += '<div class="row"><div class = "col-md-3"><p>'+Dish.ingredients[i].quantity + ' ' + Dish.ingredients[i].unit + '</p></div><div class= "col-md-5"><p>'+Dish.ingredients[i].name+'</p></div><div class="col-md-2"><p>SEK</p></div><div class="col-md-2"><p>'+Dish.ingredients[i].price+'</p></div></div'; 

	}

	this.dishInfoTop.html(dishInfoDisplay);
	this.numOfGuests.html(numOfGuestsInfo);
	this.ingredientsList.html(ingredientsInfo);
	this.totalprice.html(totalpriceInfo);


	
	
	
}
 
