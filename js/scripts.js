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
    li.on('dblclick', () => li.toggleClass('strike'));

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    //delete item 
    crossOutButton.on('click', () => li.addClass('delete'));
    //sort item list
    $('#list').sortable();
}

