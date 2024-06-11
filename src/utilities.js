

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


export {IsEmpty, PopUpWarning, TextLimiter}