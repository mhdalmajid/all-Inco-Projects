const crypto = require('crypto');

// we store the tokens in-memory for simplicity's sake
// in production we'd make them persistent
const authTokens = {};

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

module.exports = {

    setAuthToken: (userId, res) => {
        const authToken = generateAuthToken();

        authTokens[authToken] = userId;
        res.cookie('AuthToken', authToken);
    },

    unsetAuthToken: (req, res) => {
        delete authTokens[req.cookies['AuthToken']];
        res.clearCookie('AuthToken');
    },

    getSessionUser: (req, res, next) => {
        const authToken = req.cookies['AuthToken'];

        req.user = authTokens[authToken];
        res.locals.user = req.user;     // to retrieve the user in the template
        next();
    },

    requireAuth: (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect("/login");
        }
    },

    getHashedPassword: (password) => {
        const sha256 = crypto.createHash('sha256');
        const hash = sha256.update(password).digest('base64');
        return hash;
    }

}
