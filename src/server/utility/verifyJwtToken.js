const jwt = require("jsonwebtoken");

module.exports = token => {
    console.log("token ", token)
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET || "", (err, decodedToken) => {
            if(err || !decodedToken) {
                return reject(err);
            }
            
            resolve(decodedToken);
        });
    });
};