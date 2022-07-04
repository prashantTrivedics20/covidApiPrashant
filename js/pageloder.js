function playLoader() {
    setTimeout(disableloader, 3000);
}

function disableloader() {
    document.querySelector(".Animatecontainer").style.display = "none";
    document.querySelector(".container").style.display = "block";
}