var SideView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction
  	model.addDishToMenu(1);
	model.addDishToMenu(100);


	var numOfGuest = model.getNumberOfGuests();
	var totalPrice = model.getTotalMenuPrice();
	var currentMenu = model.getFullMenu();

	console.log(totalPrice);

	//var numOfGuestField = document.getElementById('#NoOfGuestField').value;

	this.totalMenuPriceDisplay = container.find("#totalMenuPrice");
	this.totalGuestNumberDisplay = container.find("#NoOfGuestField");
	this.StarterOnMenuDisplay = container.find("#StarterDishOnMenu");
	this.MCOnMenuDisplay = container.find("#MCDishOnMenu");
	this.DessertOnMenuDisplay = container.find("#DessertDishOnMenu");


	var totalMenuPriceInfo = '';
	var numOfGuestFieldInfo = '';
	var StarterOnMenu = '';
	var MCOnMenu = '';
	var DessertOnMenu = '';


	totalMenuPriceInfo = '<p> SEK '+ totalPrice + '</p>';
	numOfGuestFieldInfo = '<input type = "number" value = "'+numOfGuest+'">';

	if(currentMenu[0].id == undefined)
	{
		StarterOnMenu = '<div class="col-md-6" > <p>' + '---' + ' </p> </div>'+'<div class="col-md-6"><p>'+ ' ....' +'</p></div>';
	}
	else
	{
		StarterOnMenu = '<div class="col-md-6" > <p>' + currentMenu[0].name + ' </p> </div>'+'<div class="col-md-6"><p>'+model.getDishPrice(currentMenu[0].id)+' x '+numOfGuest+'</p></div>';

	}

	if(currentMenu[1].id == undefined)
	{
	MCOnMenu = '<div class="col-md-6" > <p>' + '---' + ' </p> </div>'+'<div class="col-md-6"><p>'+ '....'+'</p></div>';
	}
	else
	{
	MCOnMenu = '<div class="col-md-6" > <p>' + currentMenu[1].name + ' </p> </div>'+'<div class="col-md-6"><p>'+ model.getDishPrice(currentMenu[1].id)+' x '+numOfGuest+'</p></div>';

	}

	if(currentMenu[2].id == undefined)
	{
	DessertOnMenu = '<div class="col-md-6" > <p>' + '---' + ' </p> </div>'+'<div class="col-md-6"><p>'+'....'+'</p></div>';
	}
	else
	{
	DessertOnMenu = '<div class="col-md-6" > <p>' + currentMenu[2].name + ' </p> </div>'+'<div class="col-md-6"><p>'+ model.getDishPrice(currentMenu[2].id)+' x '+numOfGuest+'</p></div>';

	}



	this.totalMenuPriceDisplay.html(totalMenuPriceInfo);
	this.totalGuestNumberDisplay.html(numOfGuestFieldInfo);
	this.StarterOnMenuDisplay.html(StarterOnMenu);
	this.MCOnMenuDisplay.html(MCOnMenu);
	this.DessertOnMenuDisplay.html(DessertOnMenu);
	
}