const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.get("x-access-token");
    if (!token) {
        return res.status(401).send(false);
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).send(false);
    }
};
