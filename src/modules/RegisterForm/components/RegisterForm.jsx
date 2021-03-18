import React from 'react'
import { Link } from 'react-router-dom'
import PasswordStrengtMeter from '../../Validate/PasswordStrengtMeter'

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur
    } = props;

    return (
        <form onSubmit={handleSubmit} className="form">
            <ul className="links">
                <Link className="" to="/login">LOG IN</Link>
                <Link className="active" to="/register">LOG UP</Link>
            </ul>
            <div className="form_body">
                <label className="fullName">
                    <span>
                        <i className="fas fa-user"></i>
                    </span>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter a name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.name && errors.name ? "error_form" : ''}
                        required />
                    {!touched.name ? '' : errors.name ? <i className="fas fa-circle"></i> : <i className="fas fa-check-circle"></i>}
                    {touched.name && errors.name && <p className="error_mes">{ errors.name }</p>}
                </label>
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
                    {touched.email && errors.email && <p className="error_mes">{ errors.email }</p>}
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
                    {touched.password && errors.password && <p className="error_mes">{ errors.password }</p>}
                </label>
                <PasswordStrengtMeter password={errors.password ? '' : values.password} />
                <button onClick={handleSubmit} type='submit' className="button_form">SIN UP</button>
            </div>
        </form>
    )
}

export default RegisterForm
