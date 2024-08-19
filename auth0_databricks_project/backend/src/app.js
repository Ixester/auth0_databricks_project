require('dotenv').config();
const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const protectedRoute = require('./routes/protected');
const databricksRoute = require('./routes/databricks');

const app = express();

// Middleware de autenticação JWT
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

app.use('/api/protected', checkJwt, protectedRoute);
app.use('/api/databricks', checkJwt, databricksRoute);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
