const jwt = require("jsonwebtoken");

module.exports = (token) => new Promise((resolve, reject) => {
    // console.log("token ", token)
    jwt.verify(token, process.env.JWT_SECRET || "", (err, decodedToken) => {
        if (err || !decodedToken) {
            return reject(err);
        }

        resolve(decodedToken);
    });
});