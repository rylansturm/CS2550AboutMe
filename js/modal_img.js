function makeModal(img) {
    var modal = document.getElementById("modal-div");
    var modalImage = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImage.src = img.src;
}

function closeDiv(elem) {
    if (elem.tagName.toLowerCase() == "img") {

    }
    else {
        var modal = document.getElementById("modal-div");
        modal.style.display = "none";
    }
}