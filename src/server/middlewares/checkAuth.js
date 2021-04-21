const { verifyJwtToken } = require("../utility")

const checkAuth = (req, res, next) => {

    if (req.path === "/users/login" || req.path === "/users/registr") {
        return next();
    }

    const token = req.headers.token;

    console.log("verifyJwtToken ", verifyJwtToken(token))

    verifyJwtToken(token)
    // .then(data => {
    //     req.data = data;
    //     next();
    // }).catch(() => {
    //     res.status(403).json({ message: "Invalid token" });
    // })
    next();

}

module.exports = checkAuth;