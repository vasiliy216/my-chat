import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik'
import { Validate } from '../../index'

import { User } from '../../../redux/actions'
import store from '../../../redux/store'

export default withFormik({
    mapPropsToValues: () => ({ email: '', fullName: '', password: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: true, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {

        store
            .dispatch(User.fetchUserRegistr(values))
            .then(({ data }) => {
                props.history.push('/register/verifi?hash=' + data.confirmed_hash);
                setSubmitting(false)
            }).catch((err) => {
                console.log(err)
                setSubmitting(false)
            })
    },
    displayName: "RegisterForm"

})(RegisterForm);