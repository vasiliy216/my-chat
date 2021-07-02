import React from 'react'
import generaterAvatarColor from '../../../utils/helpers/generaterAvatarColor'

const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img src={user.avatar} alt={`Avatar ${user.fullName}`} />
        )
    } else {

        const { color, colorLighten } = generaterAvatarColor(user._id)

        let firstLetter = user.fullName[0];

        return (
            <div className="dialog_no_avatar" style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)` }}>{firstLetter}</div>
        )
    }

}

export default Avatar
