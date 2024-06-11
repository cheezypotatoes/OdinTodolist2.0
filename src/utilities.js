

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


export {IsEmpty, PopUpWarning, TextLimiter, ShowConfigModal, ClearInput}