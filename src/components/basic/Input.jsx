import React from 'react'

const Input = () => {
    return (
        <label className="password">
            <input
                type='password'
                name="password"
                required />
            <i className='fas fa-eye-slash'></i>
        </label>
    )
}

export default Input
