'use strict';

const Items = require('../model/Items');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/items',
  config: {
    handler: (req, res) => {
      Items
        .find()
        .where({adminId: req.auth.credentials.id})
        .exec((err, items) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!items.length) {
            throw Boom.notFound('No items found!');
          }
          res(items);
        })
    },
    // Add authentication to this route
    // The user must have a scope of `admin`
    auth: {
      strategy: 'jwt',
      scope: ['admin']
    }
  }
}