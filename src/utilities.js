
const DialogModal = document.getElementById("ModalDialogWarning");

function IsEmpty(input) {
    return input.trim() === '';
}


function PopUpWarning(message){
    document.getElementById("ModalWarningText").innerText = message
    DialogModal.showModal();
}

function TextLimiter(text) {
    return text.length > 8;
}

function ShowConfigModal(){
    document.getElementById("ConfigurationModal").showModal();
}

function ClearInput(){
    document.getElementById("itemInput").value = "";
}

function ReturnPriority(){
    let priorityChecked = "Empty"
    for (let priority of document.getElementsByName('priority')){
        if (priority.checked) {
            priorityChecked = priority.value;
        }
    }
    return priorityChecked;
}

// Clear all input in the config modal
function ClearConfigInputs(){
    document.getElementById('DescriptionInput').value = '';
    document.getElementById('DueDate').value = '';
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

}

export {IsEmpty, PopUpWarning, TextLimiter, ShowConfigModal, ClearInput, ReturnPriority, ClearConfigInputs}