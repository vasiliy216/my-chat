const { verifyJwtToken } = require("../utility")
const jwt = require("jsonwebtoken")

const checkAuth = (req, res, next) => {

    if (req.path === "/users/login" || req.path === "/users/registr") {
        return next();
    }

    const token = req.headers.token;

    if (token) {
        verifyJwtToken(token)
            .then(data => {
                if(data) {
                    req.user = data.data._doc;
                }

                next();
            }).catch(() => {
                res.status(403).json({ message: "Invalid token" });
            })
    }

}

module.exports = checkAuth;