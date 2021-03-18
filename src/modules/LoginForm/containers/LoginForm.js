import LoginForm from '../components/LoginForm'
import { withFormik } from 'formik'
import { Validate } from '../../'

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: false, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "LoginForm"

})(LoginForm);