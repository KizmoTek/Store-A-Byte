window.onload = () => {
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
    const auth = firebase.auth();
    const loginButton = document.getElementsByClassName("google")
    const signOutButton = document.getElementById('logoutButton')
    const profilePic = document.getElementById('profileTopIMG')
    var userVar

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
        userVar = user
        photourl = user.photoURL    
        profilePic.src = photourl
        profilePic.style.backgroundColor = "transparent"
        profilePic.style.borderRadius = "0px"
        } else {
        userVar = null
        signOutButton.style.display = "none"
        profilePic.src = "Images/DefaultProfilePicture.png"
        }
    })

    loginButton[0].addEventListener('click', (e) => {
        firebase.auth().signInWithRedirect(provider)
    })
    signOutButton.addEventListener('click', (e) => {
        firebase.auth().signOut()
    })
/*
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage + "\nError Code: " + errorCode)
      });
      */



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
}