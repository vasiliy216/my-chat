import React, { useState } from 'react';
import PasswordStrengtMeter from '../../common/PasswordStrengtMeter';
import axios from 'axios';

function SinUp() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errForm, setErrForm] = useState({// error validate
        errName: false,
        errEmail: false,
        errPassword: false
    })

    const [isLoading, setIsLoading] = useState(false);

    const [bool, setBool] = useState(false);  //icon

    const post = async () => {

        setIsLoading(true);

        await axios.post('http://localhost:4000/app/signup', form);

    }

    console.log(isLoading);

    const onHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const validate = () => {

        if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(form.email)) {
            setErrForm({...errForm, errEmail: true});
        }
        else {
            setErrForm({ ...errForm, errEmail: false });
        }

    }

    // console.log(errForm)

    return (
        <div className="form_body">
            <p>Full Name</p>
            <input
                value={form.name}
                onChange={onHandler}
                type="text"
                name="name"
                className={errForm.errName ? 'error_form' : ''}
                required />
            <p>Email</p>
            <input
                value={form.email}
                onChange={onHandler}
                type="text"
                name="email"
                className={errForm.errEmail ? 'error_form' : ''}
                required />
            <p>Password</p>
            <label className="password">
                <input
                    value={form.password}
                    onChange={onHandler}
                    type={bool ? 'text' : 'password'}
                    name="password"
                    className={errForm.errPassword ? 'error_form' : ''}
                    required />
                    <i onClick={() => setBool(!bool)} className={bool ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
            </label>
            <PasswordStrengtMeter password={form.password} />
            <button onClick={post} type="button" className="button_form" disabled={isLoading}>
                {isLoading ? "Loading..." : "SING UP"}
            </button>
        </div>
    )
}

export default SinUp;