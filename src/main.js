import "./main.css";
import { TextLimiter, PopUpWarning, IsEmpty, 
    CreateLocalStorageTodoList, GenerateAllTodoList, printLocalStorage, 
    CheckIfDuplicate, ClearInput, AddProperties, ReturnPriority, ClearConfigInputs} from "./barrel";


const ItemListInput = document.getElementById("itemInput")
let SelectionIdentifier = document.getElementById("SelectionIdentifier");
let CurrentlySelectedListName = "";
const dueDateText = document.getElementById("DueDateText");
const descriptionText = document.getElementById("DescriptionText");

function ButtonFunctionality(){
    // Add Item
    document.getElementById("AddItem").addEventListener("click", () =>{
         // TODO: REMOVE AFTER
        printLocalStorage();
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For Item Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value)){PopUpWarning("Input must be 8 letters or lower"); return} // Check if input is less than 16 letters

        console.log("Good to go");
        ClearInput(); // Clear Input
    })

    // Add List Button
    document.getElementById("AddList").addEventListener("click", () =>{
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For List Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value)){PopUpWarning("Input must be 8 letters or lower"); return} // Check if input is less than 16 letters
        else if (CheckIfDuplicate(ItemListInput.value)){PopUpWarning("Duplicate name found"); return} // Check if duplicate

        CreateLocalStorageTodoList(ItemListInput.value); // Create Object
        ClearInput(); // Clear Input
    })

    // Close Modal Warning Button
    document.getElementById("ModalCloseButton").addEventListener("click", () =>{
        document.getElementById("ModalDialogWarning").close();
    })

    // Close Modal Config Button
    document.getElementById("closeButton").addEventListener("click", () =>{
        document.getElementById("ConfigurationModal").close();
    })

    // Save Configuration Button
    document.getElementById("saveButton").addEventListener("click", () =>{
        let Description = document.getElementById("DescriptionInput").value;
        let DueDate = document.getElementById("DueDate").value;
        let priority = ReturnPriority();
        AddProperties(CurrentlySelectedListName, DueDate, Description, priority);
        document.getElementById("ConfigurationModal").close();
        ClearConfigInputs(); // Clear inputs of the config modal
        ListSelected(CurrentlySelectedListName); // Update the details
    })
}

function ListSelected(ListName){
    CurrentlySelectedListName = ListName; // A way to identify what it selected (used for later)
    SelectionIdentifier.innerText = `Currently Selecting: ${ListName}`;
    dueDateText.innerText = `Due Date: ${JSON.parse(localStorage.getItem(ListName)).dueDate}`;
    descriptionText.innerText = `Description: ${JSON.parse(localStorage.getItem(ListName)).description}`;
}

function ListSelectedNull(){
    CurrentlySelectedListName = "";
    SelectionIdentifier.innerText = `Currently Selecting:`;
    dueDateText.innerText = "Due Date:";
    descriptionText.innerText = "Description:";
}


function Bootstrap(){
    ButtonFunctionality();
    GenerateAllTodoList();
}


Bootstrap();


export {ListSelected, ListSelectedNull}


