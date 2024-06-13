import "./main.css";
import { TextLimiter, PopUpWarning, IsEmpty, 
    CreateLocalStorageTodoList, GenerateAllTodoList, printLocalStorage, 
    CheckIfDuplicate, ClearInput, AddProperties, ReturnPriority,
    ClearConfigInputs, ReturnObjectPriority, AddItemToList,
    ClearCurrentlyShownItems} from "./barrel";


const ItemListInput = document.getElementById("itemInput")
const SelectionIdentifier = document.getElementById("SelectionIdentifier");
const dueDateText = document.getElementById("DueDateText");
const descriptionText = document.getElementById("DescriptionText");
let CurrentlySelectedListName = "";

function ButtonFunctionality(){
    // Add Item
    document.getElementById("AddItem").addEventListener("click", () =>{
        printLocalStorage(); // TODO: REMOVE AFTER
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For Item Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value, 10)){PopUpWarning("Item name must be 10 letters or lower"); return} // Check if input is less than 16 letters
        else if (IsEmpty(CurrentlySelectedListName)){PopUpWarning("Please select a list"); return} // Check if no list selected
        AddItemToList(CurrentlySelectedListName, ItemListInput.value); // Add item to list
        ClearInput(); // Clear Input
    })

    // Add List Button
    document.getElementById("AddList").addEventListener("click", () =>{
        if (IsEmpty(ItemListInput.value)){PopUpWarning("Cannot proceed (No Input For List Name)");return} // Check if empty (returns if true)
        else if (TextLimiter(ItemListInput.value, 8)){PopUpWarning("List name must be 8 letters or lower"); return} // Check if input is less than 16 letters
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
    let colorPriority = ReturnObjectPriority(ListName); // Getting the priority for color coding the text
    CurrentlySelectedListName = ListName; // A way to identify what it selected (used for later)
    SelectionIdentifier.innerText = `Currently Selecting: ${ListName}\n Priority: ${colorPriority}`;
    dueDateText.innerText = `Due Date: ${JSON.parse(localStorage.getItem(ListName)).dueDate}`;
    descriptionText.innerText = `Description: ${JSON.parse(localStorage.getItem(ListName)).description}`;

    // Changing its colors depending on the priority
    if (colorPriority === "low"){SelectionIdentifier.style.color = "green";}
    else if (colorPriority === "medium"){SelectionIdentifier.style.color = "yellow";}
    else if (colorPriority === "high"){SelectionIdentifier.style.color = "red";}

    ClearCurrentlyShownItems(); // Clear every item when moving pressing a different list
}

function ListSelectedNull(){
    // Resets everything after deleting a list
    CurrentlySelectedListName = "";
    SelectionIdentifier.innerText = `Currently Selecting:`;
    dueDateText.innerText = "Due Date:";
    descriptionText.innerText = "Description:";
    SelectionIdentifier.style.color = "white";
}


function ReturnSelectedListName(){
    return CurrentlySelectedListName;
}


function Bootstrap(){
    ButtonFunctionality();
    GenerateAllTodoList();
    RandomSuggestion();
}

function RandomSuggestion(){
    document.getElementById("itemInput").placeholder = [
        "Create a to-do list for birthday",
        "Plan weekend activities",
        "Organize office tasks",
        "Schedule meeting with team",
        "Buy groceries for the week",
        "Prepare presentation for Monday",
        "Book a dentist appointment",
        "Write a blog post",
        "Clean the house",
        "Read a new book",
        "Update resume",
        "Plan a vacation",
        "Finish a coding project",
        "Clean the garage",
        "Start a new hobby",
        "Call a friend",
        "Practice a musical instrument",
        "Work on a DIY project",
        "Exercise for 30 minutes",
        "Meditate for 10 minutes",
        "Review monthly budget",
        "Organize photo album",
        "Learn a new recipe",
        "Study for exams",
        "Water the plants",
        "Send thank you cards",
        "Fix a broken appliance",
        "Volunteer in community",
        "Attend a workshop",
        "Create a vision board",
        "Write a letter",
        "Set goals for the month",
        "Clean out the refrigerator",
        "Host a dinner party",
        "Research a new topic",
        "Practice mindfulness",
        "Donate unused items",
        "Plan a family game night",
        "Review insurance policies",
        "Make a doctor's appointment",
        "Update your portfolio",
        "Organize your closet",
        "Plan a surprise for someone",
        "Write in your journal",
        "Catch up on reading",
        "Make a gratitude list",
        "Plan a date night",
        "Update your software",
        "Backup important files",
        "Rearrange furniture",
        "Learn a new language",
        "Take a photography walk",
        "Organize your desk",
        "Plan your week ahead",
        "Watch a documentary",
        "Do a digital detox",
        "Cook a meal from scratch",
        "Take a nature hike",
        "Start a garden project",
        "Create a playlist",
        "Do a random act of kindness",
        "Review your goals",
        "Make a vision board",
        "Take a day off",
        "Plan a road trip",
        "Do a puzzle",
        "Clean your windows",
        "Write a short story",
        "Make homemade gifts",
        "Practice yoga",
        "Organize your emails",
        "Update your social media profiles",
        "Research career opportunities",
        "Clean your car",
        "Start a savings plan",
        "Plan a themed party",
        "Do a craft project",
        "Plan a movie night",
        "Create a workout routine",
        "Go for a bike ride",
        "Make a scrapbook",
        "Write a poem",
        "Organize your books",
        "Clean your bathroom",
        "Plan a picnic",
        "Take a cooking class",
        "Update your address book",
        "Send out invitations",
        "Plan a reunion",
        "Write a song",
        "Make a time capsule",
        "Organize your pantry",
        "Do a wardrobe refresh",
        "Create a home maintenance schedule",
        "Make a bucket list",
        "Host a potluck",
        "Plan a staycation",
        "Try a new sport",
        "Review your subscriptions",
        "Write a business plan",
        "Do a random good deed",
        "Plan a charity event",
        "Organize your jewelry",
        "Take an online course",
        "Make a budget for a project"
    ][Math.floor(Math.random() * 100)];
}


Bootstrap();


export {ListSelected, ListSelectedNull, ReturnSelectedListName}


