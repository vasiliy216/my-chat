import React from 'react'
import Zxcvbn from 'zxcvbn'

const PasswordStrengtMeter = ({ password }) => {

    const ResultMeter = Zxcvbn(password);
    
    const num = ResultMeter.score * 25;
    
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
        </div>
    )
}

export default PasswordStrengtMeter
