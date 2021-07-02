const jwt = require("jsonwebtoken");
const { reduce } = require("lodash");

const JwtToken = user => {

    let token = jwt.sign(
        {
            data: reduce(user, (result, value, key) => {
                if(result !== "password") {
                    result[key] = value;
                }
                return result;
            }, {})
        },
        process.env.JWT_SECRET || "",
        {
            expiresIn: process.env.JWT_MAX_AGE,
            algorithm: "HS384"
        }
    );

    return token;

}

module.exports = JwtToken;