'use strict';

const User = require('../model/User');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/hb',
  config: {
    handler: (req, res) => {
      res(200);
    },
    auth: {
      strategy: 'jwt',
    }
  }
}