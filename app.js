var items = [];

function listTodos() {
    var html = '<flexbox>';
    for (i = 0; i < items.length; i++) {
        html += '<div><span class="todoItem">' + items[i] + '</span><a href="#" class="deleteItem"> x</a>' + '</div>';
    };
    html += '</flexbox>';

    document.getElementById('items').innerHTML = html;
    var todoItem = document.getElementsByClassName('todoItem');

    // loop through all items in the array and add the event listener
    for (i = 0; i < todoItem.length; i++) {
        // Set id to uniquely identify each todo item
        todoItem[i].id = 'todoItem-' + i;
        id = todoItem[i].id;
    }

    // Function to remove todo items if "x" is clicked
    var deleteItems = document.getElementsByClassName('deleteItem');
    for (i = 0; i < deleteItems.length; i++) {
        deleteItems[i].id = i;
        deleteItems[i].addEventListener('click', remove);
    };
}

function remove(event) {
    items.splice(event.target.id, 1);
    listTodos();
}

document.getElementById('add').addEventListener('click', add);

function add() {
    var input = document.getElementById('entry');
    var task = input.value;
    task = task.trim();
    if (task != '') {
        items.push(task);
        listTodos();
        input.value = '';
        return false;

    }

    return false;
}