
// Top Image
var lastMouseX = 0,
    lastMouseY = 0;
var rotX = 0,
    rotY = 0;

var banner = document.getElementsByTagName("BODY")[0]
banner.addEventListener("mousemove", mouseMoved)
var bannerIMG = document.getElementById("imgHandler")
var IMG = document.getElementById("topImg")
bannerIMG.style.transition = "all 0.4s linear"

function mouseMoved(ev) {
    bannerIMG.style.animation = ""
    lastMouseX = IMG.getBoundingClientRect().x + IMG.getBoundingClientRect().width / 2
    lastMouseY = IMG.getBoundingClientRect().y + IMG.getBoundingClientRect().height / 2
    var deltaX = ev.clientX - lastMouseX;
    var deltaY = ev.clientY - lastMouseY;

    rotY = deltaX / 16.66;
    rotX = deltaY / 5.5;
    if (rotY > 45) {
        rotY = 45
    }
    if (rotY < -45) {
        rotY = -45
    }

    if (rotX > 45) {
        rotX = 45
    }
    if (rotX < -45) {
        rotX = -45
    }

    bannerIMG.style.transform = "rotateX( " + -rotX + "deg) rotateY(" + rotY + "deg)"
}


//Roadmap

var lastMouseXRoadmap = 0,
    lastMouseYRoadmap = 0;
var rotXRoadmap = 0,
    rotYRoadmap = 0;

var timeline = document.getElementsByClassName("timeline")[0]
timeline.addEventListener("mousemove", function() { mouseMovedRoadmap(timeline, event); })
timeline.addEventListener("mouseleave", function() { mouseLeaveRoadmap(timeline); })

function mouseMovedRoadmap(element, ev) {
    element.style.transition = "all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"

    lastMouseXRoadmap = element.getBoundingClientRect().x + element.getBoundingClientRect().width / 2
    lastMouseYRoadmap = element.getBoundingClientRect().y + element.getBoundingClientRect().height / 2
    var deltaX = lastMouseXRoadmap - ev.clientX ;
    var deltaY = lastMouseYRoadmap - ev.clientY;

    rotYRoadmap = deltaX / 52.5; //525
    rotXRoadmap = deltaY / 49.5; //495
    if (rotYRoadmap > 10) {
        rotYRoadmap = 10
    }
    if (rotYRoadmap < -10) {
        rotYRoadmap = -10
    }

    if (rotXRoadmap > 10) {
        rotXRoadmap = 10
    }
    if (rotXRoadmap < -10) {
        rotXRoadmap = -10
    }

    
    element.style.transform = "rotateX( " + -rotXRoadmap + "deg) rotateY(" + rotYRoadmap + "deg) perspective(900px) scale3d(1.05, 1.05, 1.05)"
}

function mouseLeaveRoadmap(element) {
    element.style.transform = "scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) perspective(900px)"
}

document.getElementById("aboutAnchorLink").addEventListener("click", function () {
    var about = document.getElementById('aboutDiv');
    about.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
})

document.getElementById("pricingAnchorLink").addEventListener("click", function () {
    var pricing = document.getElementById('pricingDiv');
    pricing.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
})

document.getElementById("roadmapAnchorLink").addEventListener("click", function () {
    var pricing = document.getElementById('timeline-content');
    pricing.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
})

function showPopup() {
    document.getElementById("infoPopUpText").style.opacity = "1"
}

function closePopup() {
    document.getElementById("infoPopUpText").style.opacity = "0"
}
