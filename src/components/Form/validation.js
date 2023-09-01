export default function validate (inputs){
    const errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const validateEmail = inputs.email.length && inputs.email.length <= 35 && regexEmail.test(inputs.email);
    if(inputs.email && !validateEmail){
        errors['email'] = "Ingrese un email válido";
    } else {
        errors['email'] = "";
    }

    const regexPassword = /^(?=.*\d).{6,10}$/;
    const validatePassword = regexPassword.test(inputs.password);
    if(!validatePassword && inputs.password){
        errors['password'] = "Password inválido";
    } else {
        errors['password'] = "";
    }
    return errors;
}