/**
 * Password Validations are used to validate the Password 
 * 
 * - Password must contain 1 upper , 1 lower , 1 numberic and 1 special character
 */

export const validatePassword = (value) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s.).{8,15}$/.test(value) ? true : false;
};
