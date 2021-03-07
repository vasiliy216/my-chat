import React from 'react'
import Zxcvbn from 'zxcvbn'

const PasswordStrengtMeter = ({ password }) => {

    const ResultMeter = Zxcvbn(password);
    
    const num = ResultMeter.score * 25;

    const createPassLabel = () => {
        switch (ResultMeter.score) {
            case 0:
                return 'Very weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fear';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return '';
        }
    }
    
    const funcProgressColor = () => {
        switch (ResultMeter.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }

    const changePasswordColor = () => ({
        width: `${num}%`,
        background: funcProgressColor()
    })

    return (
        <div className='password_line'>
            <div className='password_line_color' style={ changePasswordColor() }></div>
            <span style={{ color: funcProgressColor() }}>{ createPassLabel() }</span>
        </div>
    )
}

export default PasswordStrengtMeter
