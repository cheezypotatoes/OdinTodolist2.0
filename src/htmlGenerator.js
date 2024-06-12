import { ListSelected, DeleteTodoList, ListSelectedNull, ShowConfigModal, ReturnObjectPriority} from "./barrel";

const ListsDisplay = document.getElementById("ListsDisplay");

function CreateTodoList(name) {
    let TodoList = document.createElement("div");
    TodoList.className = "TodoList";
    TodoList.appendChild(Object.assign(document.createElement("h1"), { innerText: name , onclick: () => {ListSelected(name)}})); // Title

    let configureList = Object.assign(document.createElement("button"), { innerText: "Configure", className: "ConfigureListButton" });
    configureList.addEventListener("click", () =>{
        console.log("Configuration");
        ShowConfigModal();
        ListSelected(name);
    })

    let DeleteButton = Object.assign(document.createElement("button"), { innerText: "Delete", className: "DeleteButton" });
    DeleteButton.addEventListener("click", () =>{
        // Removing its existence
        ListSelectedNull(); // Making selected empty again
        DeleteTodoList(name)
        TodoList.remove();
    })

    TodoList.append(configureList);
    TodoList.append(DeleteButton);
    ListsDisplay.appendChild(TodoList);
}

function GenerateAllTodoList(){
    for (let i = 0; i < localStorage.length; i++) {
        // Weird solution to deal with object in local storage causes by extension
        // Sorting by catching an error by trying to parse and get the related attribute
        try {
            let ListName = localStorage.key(i);
            JSON.parse(localStorage.getItem(ListName)).TodoArray; // One line if statement causes error if not found
            CreateTodoList(ListName);
        } catch (error) {}  
    }
}

export {CreateTodoList, GenerateAllTodoList};
