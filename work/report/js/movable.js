//Make the element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(elmnt);
        console.log("pos1: " + pos1 + ", pos2: " + pos2 + ", pos3: " + pos3 + ", pos4: " + pos4);
        console.log("clientX: " + e.clientX + ", clientY: " + e.clientY)

        //Right
        if (pos3 > 1235) {
            elmnt.style.left = 1234 + "px";
        }
        //Down
        if (pos4 > 590) {
            elmnt.style.top = 589 + "px";

        }
        //Left
        if (pos3 < 15) {
            elmnt.style.left = 14 + "px";

        }
        //Up
        if (pos4 < 12) {
            elmnt.style.top = 11 + "px";
        }

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        //top moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}