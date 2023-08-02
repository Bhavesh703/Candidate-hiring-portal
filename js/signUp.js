// javascript code for password and confirm password should be match & otherwise show error
let password = document.getElementById("password"),
confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Confirm Password Don't Match With Password");
        }
        else{
            confirmPassword.setCustomValidity("");
        }
    }
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;


// javascript code for hide and show password with eye icon
let togglePassword = document.querySelector('#togglePassword'),
passwordShow = document.querySelector('.passwordShow');   

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});


    // let togglePasswordInput = document.querySelector('#togglePassword');
    // // passwordShow = document.querySelector('.passwordShowInput');   

    // togglePasswordInput.addEventListener('click', function (e) {
    //     // toggle the type attribute
    //     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    //     password.setAttribute('type', type);
    //     // toggle the eye / eye slash icon
    //     this.classList.toggle('bi-eye');
    // });