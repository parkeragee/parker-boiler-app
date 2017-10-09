'use strict';

const Accounts = require('../model/Accounts');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/accounts',
  config: {
    handler: (req, res) => {
      Accounts
        .find()
        .where({users: req.auth.credentials.id})
        .exec((err, accounts) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!accounts.length) {
            res([]);
          }
          res(accounts);
        })
    },
    // Add authentication to this route
    // The user must have a scope of `admin`
    auth: {
      strategy: 'jwt',
      scope: ['admin'],
    },
  }
}