console.log("im here")
var lastMouseX = 0,
	lastMouseY = 0;
var rotX = 0,
	rotY = 0;

var banner = document.getElementById("topImgDiv")
banner.addEventListener("mousemove", mouseMoved)
banner.addEventListener("mouseleave", centerImage)
var bannerIMG = document.getElementById("imgHandler")
var IMG = document.getElementById("topImg")

function mouseMoved(ev) {
    bannerIMG.style.animation = ""
    lastMouseX = IMG.getBoundingClientRect().x + IMG.getBoundingClientRect().width / 2
    lastMouseY = IMG.getBoundingClientRect().y + IMG.getBoundingClientRect().height / 2
	var deltaX = ev.clientX - lastMouseX;
	var deltaY = ev.clientY - lastMouseY;
    
	/*lastMouseX = ev.pageX;
	lastMouseY = ev.pageY;*/

	rotY = deltaX / 16.66;
    rotX = deltaY / 5.5;
    if(rotY > 45) {
        rotY = 45
    }
    if (rotY < -45) {
        rotY = -45
    }

    if(rotX > 45) {
        rotX = 45
    }
    if (rotX < -45) {
        rotX = -45
    }

    bannerIMG.style.transform = "rotateX( " + -rotX + "deg) rotateY(" + rotY + "deg)"
}

function centerImage() {
    bannerIMG.style.animation = "centerImage 2s ease"
}