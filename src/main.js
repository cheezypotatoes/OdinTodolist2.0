import "./main.css";
import { CreateTodoList, PopUpWarning, IsEmpty } from "./barrel";


let DialogModal = document.getElementById("ModalDialogWarning");

function ButtonFunctionality(){
    // Add Item
    document.getElementById("AddItem").addEventListener("click", () =>{
        let input = IsEmpty(document.getElementById("itemInput").value); // Get input
        if (input){PopUpWarning(DialogModal, "Cannot proceed (No Input)");return} // Check if empty (returns if true)
        console.log("Good to go");
        
    })

    // CLose Modal Button
    document.getElementById("ModalCloseButton").addEventListener("click", () =>{
        DialogModal.close();
    })


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




