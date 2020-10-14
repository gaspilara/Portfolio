document.addEventListener('DOMContentLoaded',()=>{
    'use strict'

// INICIALIZAR FORMULARIO

    let formHtml = 'html/formMain.html'
    let formBox = document.querySelector('.formBox')

        showFormMain()

// MOSTRAR BOTONES LOGIN/LOGOUT

    function showFormMain() {
        fetch('html/formMain.html')
        .then(resp => resp.text())
        .then(formMain => {
            formBox.innerHTML = formMain
            document.getElementById('btnLogIn').addEventListener('click', showFormLogIn)
            document.getElementById('btnSignUp').addEventListener('click', showFormSignUp)            
        })
    }

// MOSTRAR FORM LOGIN

    function showFormLogIn(e) {
        e.preventDefault()
        fetch('html/formLogIn.html')
        .then(resp => resp.text())
        .then(login => {
            formBox.innerHTML = login
            document.getElementById('btn-back').addEventListener('click', backToMainForm)
    //        document.querySelector('.formLogIn').addEventListener('submit', getLogIn)
            document.querySelector('.formLogIn').addEventListener('submit', logIn)
        })
    }

// MOSTRAR FORM LOGOUT

    function showFormSignUp(e) {
        e.preventDefault()
        fetch('html/formSignUp.html')
        .then(resp => resp.text())
        .then(logout => {
            formBox.innerHTML = logout
            document.getElementById('btn-back').addEventListener('click', backToMainForm)
   //         document.querySelector('.formSignUp').addEventListener('submit', getSignUp)
            document.querySelector('.formSignUp').addEventListener('submit', createUser)
     //       document.getElementById('btn-createUser').addEventListener('click', saveUser)
        })
    }

// VOLVER A LA BOTONERA PRINCIPAL

    function backToMainForm(e) {
        e.preventDefault()
        showFormMain()
    }

// PHP ==========================================================================

    function getLogIn(e) {
        e.preventDefault();
        const data = new URLSearchParams(new FormData(this));    
        fetch('php/logIn.php', {
            method: 'post',
            body: data,
        })
        .then(resp => resp.text())
        .then(login => {
            console.log(login)
            formBox.innerHTML = login;
        })
        .catch(error => console.log(error));
    }
    
    
    function getSignUp(e) {
        e.preventDefault();
        const data = new URLSearchParams(new FormData(this));    
        fetch('php/signUp.php', {
            method: 'post',
            body: data,
        })
        .then(resp => resp.text())
        .then(signin => {
            let user = document.querySelector('.inp-user').value
            let email = document.querySelector('.inp-email').value
            let pass = document.querySelector('.inp-pass').value
            let passR = document.querySelector('.inp-passR').value
            let passAdvert = document.querySelector('.inp-passR')
            if (pass === passR) {
                console.log(signin)
                formBox.innerHTML = signin;
            } else {
                console.log(signin)
                passAdvert.classList.add('js-advertence')
            }
        })
        .catch(error => console.log(error));
    }

// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================
// FIREBASE =========================================================

// create User

    function createUser(e){
        e.preventDefault()

        const formUser = document.querySelector('.formSignUp')
        const email = formUser['signup-email'].value
        const password = formUser['signup-password'].value

        console.log( "// Email: " + email + " // Password: " + password )

        auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(cred)

      //      resetear y esconder el login (? ...
      //      const modal = document.querySelector('.formBox')
      //      M.Modal.getInstance(modal).close()
      //      this.reset()
            validateUser(cred)

            let userID = cred.user.$.W
            let userName = document.querySelector('#signup-user').value
            let userEmail = cred.user.email
            let userPassword = password
            writeUserData(userID, userName, userEmail, userPassword)

        //    getTableUsers()

            sendEmail()
        })
        .catch(error => {
            console.log( "Error: " + error )
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

// Log In

    function logIn(e){
        e.preventDefault()
        const formUser = document.querySelector('.formLogIn')
        const email = formUser['inp-loginEmail'].value
        const password = formUser['inp-loginPassword'].value

        auth.signInWithEmailAndPassword(email, password)
        .then(welcomeBack =>{
            console.log("Welcome back, "+welcomeBack.user.email+" !")
            console.log(welcomeBack)
        })
        .catch(error => {
            console.log( "No existe el usuario!" + error )
        })
    }

// Log Out // va al final

    function logOut(e){
        e.preventDefault()
        auth.signOut()
        .then( () =>{
            console.log("Adiós!")
        }, error =>{
            console.log("ERROR LOG OUT = "+error)
        })
    }
    document.getElementById('btn-logOut').addEventListener('click', logOut)


// Recover Password

function recoverPass(e){
    e.preventDefault()
    const email = document.querySelector('#inp-passRecover').value
    auth.sendPasswordResetEmail(email)
    .then( () =>{
        console.log("Se ha enviado un correo a su cuenta")
    }, error =>{
        console.log("ERROR AL RECUPERAR CONTRASEÑA = "+error)
    })
}
document.getElementById('btn-recoverPass').addEventListener('click', recoverPass)

/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=================          DATABASE           ===============*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/

    const database = firebase.database();

    function writeUserData(userId, name, email, password) {
        database.ref('users/' + userId).set({
            username: name,
            email: email,
            password: password
        });

        // Evitar duplicados:
       // database.orderByChild(email)    

    }
    /*
    function getTableUsers() {
        database.once('value', snapshot => {
            snapshot.forEach( childSnapshot => {
            var user = childSnapshot.key;
            var users = childSnapshot.val();
            var row = ""
            for (user in users) {
                row +=
                    '<tr id="'+user+'"><td>'+users[user].name+'</td><td>'+users[user].email+'</td><td>'+users[user].password+'</td><td>'+users[user].id+'</td></tr>'
            }
            document.getElementById('table-users').append(row)
            row = ""
            });
        });
    }*/

// ONLINE & OFFLINE
//    database.goOffline();
//    database.goOnline();




})