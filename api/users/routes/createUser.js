'use strict';

const bcrypt = require('bcryptjs');
const Boom = require('boom');
const User = require('../model/User');
const createUserSchema = require('../schemas/createUser');
const verifyUniqueUser = require('../util/userFunctions').verifyUniqueUser;
const createToken = require('../util/token');

function hashPassword(password, cb) {
  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
}

module.exports = {
  method: 'POST',
  path: '/api/users',
  config: {
    auth: false,
    // Before the route handler runs, verify that the user is unique
    pre: [
      { method: verifyUniqueUser }
    ],
    handler: (req, res) => {
      let user = new User();
      user.email = req.payload.email;
      user.admin = true;
      hashPassword(req.payload.password, (err, hash) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        user.password = hash;
        user.save((err, user) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          // If the user is saved successfully, issue a JWT
          res({ id_token: createToken(user) }).code(201);
        });
      });

    },
    // Validate the payload against the Joi schema
    validate: {
      payload: createUserSchema
    }
  }
}
