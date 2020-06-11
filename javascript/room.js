function currentRoom(n) {
    showRooms(slideIndex = n);
}

function showRooms(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var thumbs = document.getElementsByClassName("thumb");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" clear", "");
    }
    x[slideIndex - 1].style.display = "block";
    thumbs[slideIndex - 1].className += " clear ";
}