function newItem() {
    //add new item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert('You must write something!');
    } else {
         $('#list').append(li);
    }   
    //cross out item
    function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    //delete item 
    crossOutButton.on("click", deleteListItem);
      function deleteListItem(){
    		li.addClass("delete")
    	}
    //sort item list
    $('#list').sortable();
}

