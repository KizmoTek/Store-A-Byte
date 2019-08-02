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
const loginButton = document.getElementsByClassName("google")
const signOutButton = document.getElementById('signOut')
const profilePic = document.getElementById('profileTopIMG')


if (localStorage.signedIn == "undefined") {
    localStorage.signedIn = 0;
}

firebase.auth().onAuthStateChanged(function (user) {
    if (localStorage.signedIn == "undefined") {
        localStorage.signedIn = 0;
    }
   console.log(localStorage.signedIn)
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      userVar = user
      console.log(userVar)
      photourl = user.photoURL    
      profilePic.src = photourl
    } else {
      userVar = null
      profilePic.src = "Images/DefaultProfilePicture.png"
    }
  })

loginButton[0].addEventListener('click', (e) => {
    firebase.auth().signInWithRedirect(provider)
})
loginButton[1].addEventListener('click', (e) => {
    firebase.auth().signInWithRedirect(provider)
}) /*
signOutButton.addEventListener('click', (e) => {
    firebase.auth().signOut()
})*/
})



var signInModal = document.getElementById("SignIncontainer")

var signUpClick = document.getElementById("SignUpClick")
 
var signInClick = document.getElementById("SignInClick")

var signInBox = document.getElementById("signIn")

var signUpBox = document.getElementById("signUpModal")

var openSignInModal = document.getElementById('profileTopIMG')



signUpClick.style.backgroundColor="grey";
signUpBox.style.display = "none";
signInBox.style.display = "block";


signUpClick.addEventListener('click', (e) => {
  signUpClick.style.backgroundColor="#0b6eba";
  signInClick.style.backgroundColor="grey";
  signUpBox.style.display = "block";
  signInBox.style.display = "none";
})

signInClick.addEventListener('click', (e) => {
  signUpClick.style.backgroundColor="grey";
  signInClick.style.backgroundColor="#0b6eba";
  signUpBox.style.display = "none";
  signInBox.style.display = "block";
})