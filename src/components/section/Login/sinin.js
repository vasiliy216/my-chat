import React, {useState} from 'react';
import axios from 'axios';

function SinIn ({ onLogin }) {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [bool, setBool] = useState(false);  //icon
    const [isLoading, setIsLoading] = useState(true);


    const onHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const post = async () => {

        setIsLoading(false);

        let respons = await axios.post('http://localhost:4000/app/sin', form);

        console.log(respons.data[0]);

        onLogin(respons.data[0]);
    }

    return (
        <div className="form_body">
            <p>Email</p>
            <input
                value={form.email}
                onChange={onHandler}
                type="text"
                name="email"
                required />
            <p>Password</p>
            <label className="password">
                <input
                    value={form.password}
                    onChange={onHandler}
                    type={bool ? 'text' : 'password'}
                    name="password"
                    required />
                    <i onClick={() => setBool(!bool)} className={bool ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
            </label>
            <button onClick={post} /* type={submit ? 'button' : 'submit'} */ type='button' className="button_form" disabled={!isLoading}>
                {isLoading ? "SING UP" : "Loading..."}
            </button>
        </div>
    )
}

export default SinIn;
