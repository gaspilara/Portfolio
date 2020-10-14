

// FIREBASE =========================================================



//document.querySelector('#btn-createUser').addEventListener('click', createUser)
/*
function createUser(e) {
    e.preventDefault()

    console.log('sdfgwetrh')
    
    let email = document.querySelector('.inp-email').value
    let pass = document.querySelector('.inp-pass').value
    
    firebase.auth().creatUserWithEmailAndPassword(email, pass)
    .then(()=>{

    })
    .catch(e=>{
        console.log(e)
    })

    return false
}
*/

/*
function createUser() {

    let email = document.querySelector('.inp-email').value
    let pass = document.querySelector('.inp-pass').value
    
    firebase.auth().creatUserWithEmailAndPassword(email, pass)
    .then(()=>{

    })
    .catch(e=>{
        console.log(e)
    })

    return false
}
*/
document.querySelector('#btn-createUser').addEventListener('click', function(e){
    e.preventDefault();

    let email = document.querySelector('.inp-email').value
    let pass = document.querySelector('.inp-pass').value

    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(
            "Error: " + error +
            "Error code: " + errorCode +
            "Error message: " + errorMessage
        )
    });

})

