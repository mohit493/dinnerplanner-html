
var SelectDishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	var starterDishes = [];
  	var mainDishes = [];
  	var dessertDishes = [];
  	var dishesToDisplay = '';
    var numOfPeople = 0 ;

 

  	this.starterDisplay = container.find('#starter');
  	this.mainDisplay = container.find('#mainDish');
  	this.dessertDisplay = container.find('#dessert');
    this.foodTypeSelect = container.find('#food_dropdown');
 
    //var guestInput = document.getElementById("setNumberOfGuests").value;
    //var foodTypeSelect = document.getElementById("food_cateogory").value;
  

  	
  	var test = starterDishes.length;

  	starterDishes = model.getAllDishes('starter',);
  	mainDishes = model.getAllDishes('main dish',);
  	dessertDishes = model.getAllDishes('dessert',);
    numOfPeople = model.getNumberOfGuests();


  	for(var i = 0; i < starterDishes.length ; i++)

  	{
  		  		dishesToDisplay += '<div id = "'+ starterDishes[i].id +' " class = "col-md-4" align = "center"> <img src = "images/' +starterDishes[i].image +'" alt ="' + starterDishes[i].name +'"> <br> <br> <h3>' + starterDishes[i].name + '</h3> <p>' + starterDishes[i].description +' </p> </div>';

  	}
  		this.starterDisplay.html(dishesToDisplay);

  	dishesToDisplay = '';

  	for(var i = 0; i < mainDishes.length ; i++)

  	{
  		  		dishesToDisplay += '<div id = "'+ mainDishes[i].id +' " class = "col-md-4" align = "center"> <img src = "images/' +mainDishes[i].image +'" alt ="' + mainDishes[i].name +'"> <br> <br> <h3>' + mainDishes[i].name + '</h3> <p>' + mainDishes[i].description +' </p> </div>';

  	}
  		this.mainDisplay.html(dishesToDisplay);

  		dishesToDisplay = '';


  	for(var i = 0; i < dessertDishes.length ; i++)

  	{
  		  		dishesToDisplay += '<div id = "'+ dessertDishes[i].id +' " class = "col-md-4" align = "center"> <img src = "images/' +dessertDishes[i].image +'" alt ="' + dessertDishes[i].name +'"> <br> <br> <h3>' + dessertDishes[i].name + '</h3> <p>' + dessertDishes[i].description +' </p> </div>';

  	}

  
  
  	this.dessertDisplay.html(dishesToDisplay);
 



  }

