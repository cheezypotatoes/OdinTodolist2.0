import "./main.css";
import { TextLimiter, PopUpWarning, IsEmpty, CreateLocalStorageTodoList, GenerateAllTodoList, printLocalStorage, CheckIfDuplicate} from "./barrel";


const ItemListInput = document.getElementById("itemInput")
let SelectionIdentifier = document.getElementById("SelectionIdentifier");
let CurrentlySelectedListName = "";

function ButtonFunctionality(){
    // Add Item
    document.getElementById("AddItem").addEventListener("click", () =>{
         // TODO: REMOVE AFTER
        printLocalStorage();
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For Item Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value)){PopUpWarning("Input must be 8 letters or lower"); return} // Check if input is less than 16 letters

        console.log("Good to go");
    })

    // Add List Button
    document.getElementById("AddList").addEventListener("click", () =>{
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For List Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value)){PopUpWarning("Input must be 8 letters or lower"); return} // Check if input is less than 16 letters
        else if (CheckIfDuplicate(ItemListInput.value)){PopUpWarning("Duplicate name found"); return} // Check if duplicate

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

function ListSelectedNull(){
    CurrentlySelectedListName = "";
    SelectionIdentifier.innerText = `Currently Selecting:`;
}


function Bootstrap(){
    ButtonFunctionality();
    GenerateAllTodoList();
}


Bootstrap();


export {ListSelected, ListSelectedNull}


