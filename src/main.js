import "./main.css";
import { CreateTodoList, PopUpWarning, IsEmpty, CreateLocalStorageTodoList} from "./barrel";


const ItemListInput = document.getElementById("itemInput")
let SelectionIdentifier = document.getElementById("SelectionIdentifier");
let CurrentlySelectedListName = "";

function ButtonFunctionality(){
    // Add Item
    document.getElementById("AddItem").addEventListener("click", () =>{
        let input = IsEmpty(ItemListInput.value); // Get input
        if (input){PopUpWarning("Cannot proceed (No Input For Item Name)");return} // Check if empty (returns if true)
        console.log("Good to go");
        
    })

    // Add List Button
    document.getElementById("AddList").addEventListener("click", () =>{
        let input = IsEmpty(ItemListInput.value); // Get input
        if (input){PopUpWarning("Cannot proceed (No Input For List Name)");return} // Check if empty (returns if true)
        CreateLocalStorageTodoList(ItemListInput.value); // Create Object
    })

    // CLose Modal Button
    document.getElementById("ModalCloseButton").addEventListener("click", () =>{
        document.getElementById("ModalDialogWarning").close();
    })
}

function ListSelected(ListName){
    CurrentlySelectedListName = ListName; // A way to identify what it selected (used for later)
    SelectionIdentifier.innerText = `Currently Selecting: ${ListName}`;
    console.log(`SELECTED ${CurrentlySelectedListName}`)
}


function Bootstrap(){
    ButtonFunctionality();
}

Bootstrap();




CreateTodoList("TESTING");
CreateTodoList("TESTING2");
CreateTodoList("TESTING3");
CreateTodoList("TESTING4");
CreateTodoList("TESTING5");
CreateTodoList("TESTING6");
CreateTodoList("TESTING7");
CreateTodoList("TESTING8");
CreateTodoList("TESTING9");
CreateTodoList("TESTING10");
CreateTodoList("TESTING11");

export {ListSelected as ListSelected}


