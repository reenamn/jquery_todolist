// Check off to dos by clicking
$('ul').on("click", "li",function(){

	$(this).toggleClass('completed');
});

$('ul').on("click", "span",function(event){
	console.log("clicked X");

	event.stopPropagation();

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
})

$("input[type='text']").keypress(function(){
// console.log(event.key);

	//You clicked Enter
	if(event.key === "Enter")
	{
		//grab text from imput
		var todoText = $(this).val();

		//create new LI

		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");

		//clear the input field
		$(this).val("");
	}



})