const { verifyJwtToken } = require("../utility")

const checkAuth = (req, res, next) => {

    if (req.path === "/user/login" || req.path === "/user/registr") {
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