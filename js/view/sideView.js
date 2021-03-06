var SideView = function (container,model) {

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction
  	model.addDishToMenu(1);
  	model.addDishToMenu(100);
  	model.addDishToMenu(200);



  	var numOfGuest = model.getNumberOfGuests();
  	var totalPrice = model.getTotalMenuPrice();
  	var currentMenu = model.getFullMenu();

	//var numOfGuestField = document.getElementById('#NoOfGuestField').value;

	var totalMenuPriceDisplay = container.find("#totalMenuPrice");
	var totalGuestNumberDisplay = container.find("#NoOfGuestField");
	var StarterOnMenuDisplay = container.find("#StarterDishOnMenu");
	var MCOnMenuDisplay = container.find("#MCDishOnMenu");
	var DessertOnMenuDisplay = container.find("#DessertDishOnMenu");
	this.PlusButton = container.find("#plusGuest");
	this.MinusButton = container.find("#minusGuest")


	var totalMenuPriceInfo = '';
	var numOfGuestFieldInfo = '';
	var StarterOnMenu = '';
	var MCOnMenu = '';
	var DessertOnMenu = '';


	var ObserverObj = {
		name: "SideView",
		update: function(arg){
			if(arg == "GuestChange")
			{
				console.log("altered version running");

				numOfGuest = model.getNumberOfGuests();
				totalPrice = model.getTotalMenuPrice();

				numOfGuestFieldInfo = '<input type = "number" value = "'+numOfGuest+'">';

				totalMenuPriceInfo = '<p> SEK '+ totalPrice + '</p>';


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

				totalMenuPriceDisplay.html(totalMenuPriceInfo);
				totalGuestNumberDisplay.html(numOfGuestFieldInfo);
				StarterOnMenuDisplay.html(StarterOnMenu);
				MCOnMenuDisplay.html(MCOnMenu);
				DessertOnMenuDisplay.html(DessertOnMenu);

			}
			else
			{
				console.log("base version running");
				numOfGuest = model.getNumberOfGuests();
				totalPrice = model.getTotalMenuPrice();

				numOfGuestFieldInfo = '<input type = "number" value = "'+numOfGuest+'">';

				totalMenuPriceInfo = '<p> SEK '+ totalPrice + '</p>';


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

				totalMenuPriceDisplay.html(totalMenuPriceInfo);
				totalGuestNumberDisplay.html(numOfGuestFieldInfo);
				StarterOnMenuDisplay.html(StarterOnMenu);
				MCOnMenuDisplay.html(MCOnMenu);
				DessertOnMenuDisplay.html(DessertOnMenu);


			}
			
		}

	}

	ObserverObj.update();

	model.addObservers(ObserverObj);


	
}