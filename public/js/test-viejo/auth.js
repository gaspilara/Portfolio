// signup
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log(cred)
    })
})