export const validateEmail = (email) => {
    // email regex pattern from: https://www.w3resource.com/javascript/form/email-validation.php
    const re = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")
    return email.match(re)
}