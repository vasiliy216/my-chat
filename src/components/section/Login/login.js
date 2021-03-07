import React, {useState} from 'react';
import SinIn from './sinin';
import SinUp from './sinup';

function Login({ Login }) {

    const [state, setState] = useState(0);
    const [log, setLog] = useState(Login[0]);

    const onSelectItem = (name, index) => {
        setState(index);
        setLog(name);
    }

    return (
        <div className="row">
            <div className="title"></div>
            <form className="form">
                <ul className="links">
                    {
                        Login.map((name, index) => (
                            <li 
                                className={state === index ? 'active' : ''}
                                key={`${name}_${index}`} 
                                onClick={ () => onSelectItem(name, index) }>
                                <a>{name}</a>
                            </li>
                        ))
                    }
                </ul>
                {log === Login[0] ? <SinIn /> : <SinUp />}
            </form>
        </div>
    );
}

export default Login;