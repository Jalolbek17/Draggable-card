dragElement(document.querySelector(".card"));

function dragElement(card) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    card.onmousedown = getMouse;

    function getMouse(e) {
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = stopDrag;
        document.onmousemove = letsDrag;
    }

    function letsDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        card.style.top = (card.offsetTop - pos2) + "px";
        card.style.left = (card.offsetLeft - pos1) + "px";
    }

    function stopDrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}