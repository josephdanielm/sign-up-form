const password = document.getElementById('password')
    , passwordConfirm = document.getElementById('password-confirm')
    , passBlock = document.querySelector('.pass-block')
    , errorMsg = document.querySelector('.error-message');

function check() {
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;

    if (passwordValue === passwordConfirmValue && passwordValue !== '') {
        // Passwords match and are not empty
        if (password.classList.contains('error')) {
            password.classList.remove('error');
            passwordConfirm.classList.remove('error');
            errorMsg.classList.remove('show-error');
        }
        password.classList.add('valid');
        passwordConfirm.classList.add('valid');
    } else if (passwordValue === '' && passwordConfirmValue === '') {
        // Both fields are empty
        if (password.classList.contains('valid')) {
            password.classList.remove('valid');
            passwordConfirm.classList.remove('valid');
        }
        if (password.classList.contains('error')) {
            password.classList.remove('error');
            passwordConfirm.classList.remove('error');
            errorMsg.classList.remove('show-error');
        }
    } else {
        // Passwords don't match or at least one field is empty
        if (password.classList.contains('valid')) {
            password.classList.remove('valid');
            passwordConfirm.classList.remove('valid');
        }
        password.classList.add('error');
        passwordConfirm.classList.add('error');
        errorMsg.classList.add('show-error');
    }
}


password.addEventListener('keyup', check);
passwordConfirm.addEventListener('keyup', check);