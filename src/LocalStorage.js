import {CreateTodoList, IsEmpty, CreateListItem} from "./barrel"


// TODO: OTHER ATTRIBUTE CAN BE ADDED ON THE SETTINGS
function CreateLocalStorageTodoList(name){
    let TodoListObject = new Object();
    TodoListObject.TodoArray = [];
    TodoListObject.dueDate = "Sample Date";
    TodoListObject.description = "Sample Description";
    TodoListObject.priority = "low";

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

function AddProperties(ListName, NewDueDate, NewDescription, NewPriority){
    let List = JSON.parse(localStorage.getItem(ListName));

    if (!IsEmpty(NewDueDate)){List.dueDate = NewDueDate;}
    if (!IsEmpty(NewDescription)){List.description = NewDescription;}
    if (NewPriority !== "Empty"){List.priority = NewPriority}

    localStorage.setItem(ListName, JSON.stringify(List));
}

function ReturnObjectPriority(ListName){
    return JSON.parse(localStorage.getItem(ListName)).priority;
}

function ReturnObjectTodoArray(ListName){
    return JSON.parse(localStorage.getItem(ListName)).TodoArray;
}

// Add item to list
function AddItemToList(ListName, ItemName){
    let List = JSON.parse(localStorage.getItem(ListName));
    List.TodoArray.push(ItemName);
    localStorage.setItem(ListName, JSON.stringify(List));

    CreateListItem(ItemName); // Add the item to display
}

function DeleteSpecificItem(ItemName, ListName){
    let originalObject = JSON.parse(localStorage.getItem(ListName));
    originalObject.TodoArray = originalObject.TodoArray.filter(item => item !== ItemName);
    localStorage.setItem(ListName, JSON.stringify(originalObject));
}

export {CreateLocalStorageTodoList, printLocalStorage, DeleteTodoList,
    CheckIfDuplicate, AddProperties, ReturnObjectPriority,
    AddItemToList, ReturnObjectTodoArray, DeleteSpecificItem}