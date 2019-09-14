
var firebaseAuth = firebase.auth();

window.onload = () => {
    var lastMouseX = 0,
        lastMouseY = 0;
    var rotX = 0,
        rotY = 0;

    var banner = document.getElementsByTagName("BODY")[0]
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
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.me');
    var photourl;
    const loginButton = document.getElementsByClassName("google")
    const signOutButton = document.getElementById('logoutButton')
    const profilePic = document.getElementById('profileTopIMG')
    const myStorage = document.getElementById('MyStorageButton')
    var userVar

    

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user")
            myStorage.style.opacity = "1"
            myStorage.style.display = "block"
            profilePic.removeAttribute("data-target");
            profilePic.removeAttribute("data-toggle");
            userVar = user
            photourl = user.photoURL
            if (photourl != null) {
                profilePic.src = photourl
                profilePic.style.backgroundColor = "transparent"
                profilePic.style.borderRadius = "0px"
            }
        } else {
            console.log("no user")
            myStorage.style.opacity = "0"
            myStorage.style.display = "none"
            userVar = null
            profilePic.setAttribute("data-target", "#signInModal");
            profilePic.setAttribute("data-toggle", "modal");
            profilePic.style.removeProperty("background-color")
            profilePic.style.removeProperty("border-radius")
            profilePic.src = "Images/DefaultProfilePicture.png"
        }
    })

    loginButton[0].addEventListener('click', (e) => {
        firebase.auth().signInWithRedirect(provider).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage + "\nError Code: " + errorCode)
        });

        
    })
    signOutButton.addEventListener('click', (e) => {
        firebase.auth().signOut()
        profilePic.style.removeProperty("background-color")
        profilePic.style.removeProperty("border-radius")
    })

    
    myStorage.addEventListener('click', (e) => {
        if (userVar) {
            window.location.href = "upload.html";
        }
    })

    //Login with Email and Password
    const signInEmail = document.getElementById("signInEmail")
    const signInPassword = document.getElementById("signInPassword")
    const loginButtonEmail = document.getElementById("signInButton")

    loginButtonEmail.addEventListener('click', (e) => {
        if (signInPassword.value != "" && emailIsValid(signInEmail.value) == true) {
            firebase.auth().signInWithEmailAndPassword(signInEmail.value, signInPassword.value)
        } else {
            if(signInPassword.value != "") {
                alert("Password's do not match.")
            }

            if(emailIsValid(signInEmail.value) != true) {
                alert("Please enter a valid email.")
            }
        }
    })

    //Sign Up with Email and Password
    const signUpEmail = document.getElementById("signUpEmail")
    const signUpPassword = document.getElementsByClassName("signUpPassword")
    const signUpButtonEmail = document.getElementById("signUpButton")

    signUpButtonEmail.addEventListener('click', (e) => {
        if(signUpPassword[0].value == signUpPassword[1].value && emailIsValid(signUpEmail.value) == true) {
            console.log("running")
            firebase.auth().createUserWithEmailAndPassword(signUpEmail.value, signUpPassword[0].value).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage + "\nError Code: " + errorCode)
            });
        } else {
            if(signUpPassword[0].value != signUpPassword[1].value) {
                alert("Password's do not match.")
            }
            if(emailIsValid(signUpEmail.value) != true) {
                alert("Please enter a valid email.")
            }
        }
    })
    
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }


    var signInModal = document.getElementById("SignIncontainer")

    var signUpClick = document.getElementById("SignUpClick")
    
    var signInClick = document.getElementById("SignInClick")

    var signInBox = document.getElementById("signIn")

    var signUpBox = document.getElementById("signUpModal")



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



    document.getElementById("aboutAnchorLink").addEventListener("click", function(){
        var about = document.getElementById('about');
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
    