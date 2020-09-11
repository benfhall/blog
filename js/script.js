var showModal = function(id) {
    window.curModal = document.getElementById(id);
    window.curModal.style.display = "block";
}

var closeModal = function(id) {
    window.curModal = document.getElementById(id);
    window.curModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == window.curModal) {
        window.curModal.style.display = "none";
    }
} 