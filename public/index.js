window.onload = () => {
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

    document.getElementById("aboutAnchorLink").addEventListener("click", function(){
        var about = document.getElementById('aboutDiv');
        about.scrollIntoView({ 
            block: 'center',
            behavior: 'smooth'
        })
    })

    document.getElementById("pricingAnchorLink").addEventListener("click", function(){
        var pricing = document.getElementById('pricingDiv');
        pricing.scrollIntoView({ 
            block: 'center',
            behavior: 'smooth'
        })
    })
}

function showPopup() {
    document.getElementById("infoPopUpText").style.opacity = "1"
}

function closePopup() {
    document.getElementById("infoPopUpText").style.opacity = "0"
}
    