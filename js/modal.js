var showModal = function(id) {
    window.curModal = document.getElementById(id);
    window.curModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var closeModal = function(id) {
    window.curModal = document.getElementById(id);
    window.curModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == window.curModal) {
        window.curModal.style.display = "none";
    }
} 