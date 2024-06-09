

function IsEmpty(input) {
    return input.trim() === '';
}


function PopUpWarning(DialogModal, message){
    document.getElementById("ModalWarningText").innerText = message
    DialogModal.showModal();
}

export {IsEmpty, PopUpWarning}