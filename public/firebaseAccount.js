var firebaseAuth = firebase.auth();
var userVar

window.onload = () => {
    var justLoaded = false

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.me');
    var photourl;
    const loginButton = document.getElementsByClassName("google")
    const signOutButton = document.getElementById('logoutButton')
    const profilePic = document.getElementById('profileTopIMG')
    const contactButton = document.getElementById('mail')
    const myStorage = document.getElementById('MyStorageButton')
    const signInModal = document.getElementById('signInModal')

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            if (justLoaded == true) {
                location.reload()
            }
            console.log("user")
            // signInModal.classList.remove("in");
            // signInModal.style.removeProperty("padding-right")
            // if (document.getElementsByClassName('modal-backdrop')[0]) {
            //     document.getElementsByClassName('modal-backdrop')[0].classList.remove("in");
            //     document.body.removeChild(document.getElementsByClassName('modal-backdrop')[0]);
            // }
            // document.body.classList.remove("modal-open")
            // document.body.style.removeProperty("padding-right")
            myStorage.style.opacity = "1"
            myStorage.style.display = "block"
            profilePic.removeAttribute("data-target");
            profilePic.removeAttribute("data-toggle");
            contactButton.setAttribute("data-target", "#contactModal");
            contactButton.setAttribute("data-toggle", "modal");
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
            contactButton.removeAttribute("data-target");
            contactButton.removeAttribute("data-toggle");
            profilePic.style.removeProperty("background-color")
            profilePic.style.removeProperty("border-radius")
            profilePic.src = "Images/DefaultProfilePicture.png"
        }
    })

    contactButton.addEventListener('click', (e) => {
        if (!userVar) {
            Swal.fire({
                type: 'error',
                title: 'Please sign in first.'
              })
        }
    })

    const accountDropdown = document.getElementById('accountDropdown')
    const accountDropdownList = document.getElementById('accountDropdownList')

    accountDropdown.addEventListener('mouseover', (e) => {
        if(userVar) {
            accountDropdownList.style.display = 'block'
            accountDropdownList.style.height = '67px'
            accountDropdownList.style.opacity = '1'
        }
    })

    accountDropdown.addEventListener('mouseout', (e) => {
        accountDropdownList.style.removeProperty('display')
        accountDropdownList.style.removeProperty('height')
        accountDropdownList.style.removeProperty('opacity')
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
        location.reload()
    })
    
    myStorage.addEventListener('click', (e) => {
        if (userVar) {
            if (userVar.emailVerified) {
                window.location.href = "upload.html";
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Please verify your email!',
                    footer: '<a onmouseover="" style="cursor: pointer;" onclick="sendVerificationEmail()">Resend email verification</a>'
                  })
            }
        }
    })
    
    //Login with Email and Password
    const signInEmail = document.getElementById("signInEmail")
    const signInPassword = document.getElementById("signInPassword")
    const loginButtonEmail = document.getElementById("signInButton")

    loginButtonEmail.addEventListener('click', (e) => {
        if (signInPassword.value != "" && emailIsValid(signInEmail.value) == true) {
            firebase.auth().signInWithEmailAndPassword(signInEmail.value, signInPassword.value)
            Swal.fire({
                title: 'Signing in',
                html: 'Please wait',
                allowEscapeKey: false,
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading()
                }
            })
            justLoaded = true
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

    signUpPassword[1].addEventListener('input', checkPasswordMatch)

    function checkPasswordMatch(e) {
        if(signUpPassword[1].value != signUpPassword[0].value) {
            signUpPassword[1].style.borderColor = "red"
        } else {
            signUpPassword[1].style.borderColor = "green"
            signUpPassword[1].style.borderColor = "green"
        }
    }

    signUpButtonEmail.addEventListener('click', (e) => {
        if(signUpPassword[0].value == signUpPassword[1].value && emailIsValid(signUpEmail.value) == true) {
            checkEmailExists(signUpEmail.value)
            firebase.auth().createUserWithEmailAndPassword(signUpEmail.value, signUpPassword[0].value).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage + "\nError Code: " + errorCode)
                
            });
            
            sendVerificationEmail()
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
}

function sendVerificationEmail() {
    Swal.fire({
        type: 'success',
        title: 'Verfication email has been sent!'
    })
    userVar.sendEmailVerification().then(function() {
        // Email sent.
      }).catch(function(error) {
        // An error happened.
      });
}

function checkEmailExists(email) {
    console.log(firebase.auth().fetchSignInMethodsForEmail(email))
    
    }