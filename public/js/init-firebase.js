document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    function createUser(e) {
        e.preventDefault()

        const formUser = document.querySelector('.contactForm')

        let name = formUser['name'].value
        let email = formUser['email'].value
        let msg = formUser['message'].value
        let password = formUser['email'].value

        console.log( '//Name: '+name+'// Email: '+email+' // Message: '+msg+'// Password: '+password)

        // Verificar si es con "firebase." primero
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(cred)
            validateUser(cred)
            let userID = cred.user.$.W
            let userName = document.querySelector('#signup-user').value
            let userEmail = cred.user.email
            let userPassword = password
            writeUserData(userID, userName, userEmail, userPassword)
            sendEmail()
        })
        .catch(error => console.log( "Error: " + error ))
/*
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
            } else {
                // User is signed out.
                // ...
            }
        });
*/

    }













})