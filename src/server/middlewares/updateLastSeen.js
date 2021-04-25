const { UserModal } = require("../schemas")

const updateLastSeen = (req, res, next) => {
    UserModal.updateOne(
        { _id: "607c58544cbea116d051e965" },
        { last_seen: new Date() },
        () => {} // Без колбэка не работает :(
    );
    next();
}

module.exports = updateLastSeen;