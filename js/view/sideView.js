var SideView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction


	var numOfGuest = model.getNumberOfGuests();
	var totalPrice = model.getTotalMenuPrice();

	var numOfGuestField = document.getElementById('#NoOfGuestField').value;
	console.log(numOfGuestField); 

	var numOfGuestsInfo = '';
	var totalpriceInfo = '';

	

	
	this.numOfGuests = container.find('#numOfPpl');
	this.totalprice = container.find("#totalPrice");

	



	
	
	
}