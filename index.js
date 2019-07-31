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

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      userVar = user
      console.log(userVar)
      photourl = user.photoURL    
      profilePic.src = photourl
        username.textContent = user.displayName
        if (localStorage.signedIn == 0) {
            localStorage.signedIn = 1;
        } else if (localStorage.signedIn == 1) {
            localStorage.signedIn = 0;
        } else {
            localStorage.signedIn = 0;
        }
    } else {
      userVar = null
      profilePic.src = "Images/DefaultProfilePicture.png"
    }
  })

loginButton.addEventListener('click', (e) => {
    firebase.auth().signInWithRedirect(provider)
}) /*
signOutButton.addEventListener('click', (e) => {
    firebase.auth().signOut()
})*/

var signUp = document.getElementById("signUpModal")
 
var signIn = document.getElementById("signIn")

var clicky = document.getElementById("clicky")

//signUp.style.display = "none"

clicky.onclick = click;

function click(){
  console.log("hi")
  signUp.style.display = "block"
  signIn.style.display = "none"
}