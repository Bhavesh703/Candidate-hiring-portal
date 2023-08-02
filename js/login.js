// javascript code for password visible or hide
const userPassword  = document.querySelector("#toggledPassword"),
userPasswordShow = document.querySelector(".userPasswordShow");

userPassword.addEventListener("click", function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
})