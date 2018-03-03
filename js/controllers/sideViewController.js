var SideViewController = function(view, model) {

view.PlusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 })

view.MinusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 })


}
