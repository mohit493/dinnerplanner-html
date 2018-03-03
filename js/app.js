$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var homeView = new HomeView($("#homeView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var dishView = new DishView($("#dishView"), model);
	var screenAfterView = new ScreenAfterView($("#screenAfterView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPreperationView = new DinnerPreperationView($("#dinnerPreperationView"), model);
	var sideView = new SideView($("#sideView"), model);


});