'use strict';

const Boom = require('boom');
const Accounts = require('../model/Accounts');
const createAccountSchema = require('../schemas/createAccounts');

module.exports = {
  method: 'POST',
  path: '/api/accounts/create',
  config: {
    auth: {
      strategy: 'jwt',
      scope: ['admin'],
    },
    handler: (req, res) => {
      Accounts.create({
        businessName: req.payload.businessName,
        address: req.payload.address,
        city: req.payload.city,
        state: req.payload.state,
        zipCode: req.payload.zipCode,
        phoneNumber: req.payload.phoneNumber,
        website: req.payload.website,
        users: req.auth.credentials.id,
      }, function (err, account) {
        if (err) return res(Boom.badImplementation(err));
        res(account);
      });
    },
    validate: {
      payload: createAccountSchema
    }
  }
}
