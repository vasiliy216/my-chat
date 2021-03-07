import React, {useState} from 'react';

function SinIn () {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="form_body">
            <p>Full Name</p>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="full_name"
                required />
            <p>Password</p>
            <label className="password">
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    name="password" 
                    required />
                <i className="fas fa-eye-slash"></i>
            </label>
            <button type="submit" className="button_form">SING IN</button>
        </div>
    )
}

export default SinIn;
