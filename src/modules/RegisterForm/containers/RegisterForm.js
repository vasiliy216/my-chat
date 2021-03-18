import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik'
import { Validate } from '../../index'

export default withFormik({
    mapPropsToValues: () => ({ email: '', name: '', password: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: true, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "RegisterForm"

})(RegisterForm);