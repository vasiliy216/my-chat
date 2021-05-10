import React from 'react'
import { Link } from 'react-router-dom'

import '../../style.scss'

const LoginForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting
    } = props;

    return (
        <form className="form">
            <ul className="links">
                <Link className="active" to="/login">LOG IN</Link>
                <Link className="" to="/register">LOG UP</Link>
            </ul>
            <div className="form_body">
                <label className="email">
                    <span>
                        <i className="fas fa-envelope"></i>
                    </span>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Enter a email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.email && errors.email ? "error_form" : ''}
                        required />
                    {!touched.email ? '' : errors.email ? <i className="fas fa-circle"></i> : <i className="fas fa-check-circle"></i>}
                    {touched.email && errors.email && <p className="error_mes">{errors.email}</p>}
                </label>
                <label className="password">
                    <span>
                        <i className="fas fa-lock"></i>
                    </span>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter a password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={touched.password && errors.password ? "error_form" : ''}
                        required />
                    <i className='fas fa-eye-slash'></i>
                    {touched.password && errors.password && <p className="error_mes">{errors.password}</p>}
                </label>
                <button disabled={isSubmitting} onClick={handleSubmit} type='submit' className="button_form">SIN IN</button>
            </div>
        </form>
    )
}

export default LoginForm