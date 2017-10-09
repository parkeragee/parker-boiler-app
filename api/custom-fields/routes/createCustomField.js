'use strict';

const Boom = require('boom');
const createFieldSchema = require('../schemas/createField');
const CustomFields = require('../model/CustomFields');

module.exports = {
  method: 'POST',
  path: '/api/field',
  config: {
    handler: (req, res) => {
      // Create field
      console.log('creating field');
    },
    // Validate the payload against the Joi schema
    validate: {
      payload: createFieldSchema
    }
  }
}
