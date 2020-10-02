document.addEventListener('DOMContentLoaded',()=>{
    'use strict'

// create User

    function createUser(e){
        e.preventDefault()

        const formClient = document.querySelector('.contactForm')
        const clientName = formClient['clientName'].value
        const clientEmail = formClient['clientEmail'].value
        const clientMessage = formClient['clientMessage'].value
        const clientPassword = 1010

        console.log( "// Name: " + clientName + "// Email: " + clientEmail + " // Message: " + clientMessage )

        auth.createUserWithEmailAndPassword(clientEmail, clientPassword)
        .then(cred => {
            console.log(cred)
            validateUser(cred)
            let userID = cred.user.$.W
            let userName = document.querySelector('.inpName').value
            let userEmail = cred.user.clientEmail
            let userPassword = clientPassword
            writeUserData(userID, userName, userEmail, userPassword)

        //    getTableUsers()

            sendEmail()
        })
        .catch(error => {
            console.log( "Catch error: " + error )
        })
    }

// get Validate User

    function validateUser() {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log("Bienvenid@")
            } else {
                console.log("El usuario ya existe")
            }
        })
    }

// send email verification

    function sendEmail(actionCodeSettings) {
        auth.currentUser.sendEmailVerification(actionCodeSettings)
        .then(function() {
            console.log("Email sended")
        })
        .catch(function(error) {
            console.log(error)  
        });
    }

/* DATABASE ==================================================================*/

    const database = firebase.database();

    function writeUserData(userId, name, email, password) {
        database.ref('users/' + userId).set({
            username: name,
            email: email,
            password: password
        });
    }


})