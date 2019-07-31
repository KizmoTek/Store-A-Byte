var lastMouseX = 0,
	lastMouseY = 0;
var rotX = 0,
	rotY = 0;

var banner = document.getElementById("topImgDiv")
banner.addEventListener("mousemove", mouseMoved)
banner.addEventListener("mouseleave", centerImage)
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

function centerImage() {
    bannerIMG.style.animation = "centerImage 2s ease forwards"
}

var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database().ref();
var photourl
localStorage.signedIn
const auth = firebase.auth();
const loginButton = document.getElementById('profileTopIMG')
const signOutButton = document.getElementById('signOut')
const username = document.getElementById('username')
const profilePic = document.getElementById('profile-pic')

if (localStorage.signedIn == "undefined") {
    localStorage.signedIn = 0;
}

firebase.auth().onAuthStateChanged(function(user) {
    if (localStorage.signedIn == 0) {
        localStorage.signedIn = 1;
    } else if (localStorage.signedIn == 1) {
        localStorage.signedIn = 0;
    } else {
        localStorage.signedIn = 0;
    }
    console.log(localStorage.signedIn)
    if (user) {
      userVar = user
      hide(loginButton)
      show(signOutButton)
      show(username)
      show(profilePic)
      photourl = user.photoURL    
      profilePic.src = photourl
        username.textContent = user.displayName
        
    } else {
      userVar = null
      //showInline(loginButton)  
      //hide(signOutButton)
      //hide(username)
      //hide(profilePic)
    }
  })

loginButton.addEventListener('click', (e) => {
    firebase.auth().signInWithRedirect(provider)
}) /*
signOutButton.addEventListener('click', (e) => {
    firebase.auth().signOut()
})*/