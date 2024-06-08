

// TODO: OTHER ATTRIBUTE CAN BE ADDED ON THE SETTINGS
function CreateNewTodoList(name){
    let TodoListObject = new Object();
    TodoListObject.TodoArray = [];
    TodoListObject.dueDate = dueDate;
    TodoListObject.description = description;
    TodoListObject.priority = priority;

    localStorage.setItem(name, JSON.stringify(TodoListObject));
    console.log(`Successfully stored ${name}`);
}

function printLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(`Key: ${key}, Value: ${value}`);
    }
}