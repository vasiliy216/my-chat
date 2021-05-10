import LoginForm from '../components/LoginForm'
import { withFormik } from 'formik'
import { Validate } from '../../'

import { User } from '../../../redux/actions'
import store from '../../../redux/store'

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: false, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(User.fetchUserLogin(values))
            .then(({ status }) => {

                if (status === 'success') props.history.push('/')

                setSubmitting(false)
            }).catch(() => {
                setSubmitting(false)
            })
    },
    displayName: "LoginForm"

})(LoginForm);