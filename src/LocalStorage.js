import {CreateTodoList} from "./barrel"


// TODO: OTHER ATTRIBUTE CAN BE ADDED ON THE SETTINGS
function CreateLocalStorageTodoList(name){
    let TodoListObject = new Object();
    TodoListObject.TodoArray = [];
    TodoListObject.dueDate = "";
    TodoListObject.description = "";
    TodoListObject.priority = "";

    localStorage.setItem(name, JSON.stringify(TodoListObject));
    console.log(`Successfully stored ${name}`);

    CreateTodoList(name); // Adds the new list (instead of resetting all)
}

function DeleteTodoList(name){
    localStorage.removeItem(name);
}

function printLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(`Key: ${key}, Value: ${value}`);
    }
}

function CheckIfDuplicate(name){
    if (localStorage.getItem(name) === null){
        return false
    } else {return true}
}

export {CreateLocalStorageTodoList, printLocalStorage, DeleteTodoList, CheckIfDuplicate}