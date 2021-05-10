export default ({ isRegistration, values, errors }) => {
    
    const objectValue = {
        email: value => {
            if (!value) {
                errors.email = "Please, enter a email!";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Invalid email address';
            }
        },
        name: value => {
            if (!value) errors.fullName = "Please, enter a name!";
        },
        password: value => {
            if (!value) errors.password = "Please, enter a password!";
            else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/i.test(value)
            ) errors.password = isRegistration ? "Please, enter lowercase and uppercase letters and numbers" : "Invalid password";
        }
    };

    Object.keys(values).forEach(
        key => objectValue[key] && objectValue[key](values[key])
    )
}