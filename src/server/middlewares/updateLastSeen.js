const { UserModal } = require("../schemas")

const updateLastSeen = (req, res, next) => {
    if (req.user) {
        UserModal.updateOne(
            { _id: req.user._id },
            { last_seen: new Date() },
            () => { } // Без колбэка не работает :(
        );
    }
    next();
}

module.exports = updateLastSeen;