const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.REACT_APP_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.REACT_APP_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_DOMAIN}/`,
  algorithms: ["RS256"],
});

module.exports = {
  checkJwt,
};
