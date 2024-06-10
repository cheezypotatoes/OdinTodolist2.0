import "./main.css";
import { TextLimiter, PopUpWarning, IsEmpty, CreateLocalStorageTodoList, GenerateAllTodoList, printLocalStorage} from "./barrel";


const ItemListInput = document.getElementById("itemInput")
let SelectionIdentifier = document.getElementById("SelectionIdentifier");
let CurrentlySelectedListName = "";

function ButtonFunctionality(){
    // Add Item
    document.getElementById("AddItem").addEventListener("click", () =>{
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For Item Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value)){PopUpWarning("Input must be 15 letters or lower"); return} // Check if input is less than 16 letters

        console.log("Good to go");

        // TODO: REMOVE AFTER
        printLocalStorage();
    })

    // Add List Button
    document.getElementById("AddList").addEventListener("click", () =>{
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For List Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value)){PopUpWarning("Input must be 15 letters or lower"); return} // Check if input is less than 16 letters

        CreateLocalStorageTodoList(ItemListInput.value); // Create Object
    })

    // Close Modal Button
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
    GenerateAllTodoList();
}


Bootstrap();


export {ListSelected as ListSelected}


