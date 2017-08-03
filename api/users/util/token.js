'use strict';

const jwt = require('jsonwebtoken');
const secret = require('../../../config');

function createToken(user) {
  let scopes;
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  if (user.admin) {
    scopes = 'admin';
  }
  // Sign the JWT
  return jwt.sign({ id: user._id, scope: scopes }, secret, { algorithm: 'HS256', expiresIn: "1h" } );
}

module.exports = createToken;