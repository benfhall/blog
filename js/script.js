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

function openNav() {
    document.getElementById("mobile-nav").style.display = "block";
}

function closeNav() {
    document.getElementById("mobile-nav").style.display = "none";
}

returnToTop = document.getElementById("returnToTop");

var showReturn = function() {
  var y = window.scrollY;
  if (y >= 1) {
    returnToTop.className = "show"
  } else {
    returnToTop.className = "hide"
  }
};

window.addEventListener("scroll", showReturn);