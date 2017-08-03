'use strict';

const Joi = require('joi');

const authenticateUserSchema = Joi.alternatives().try(
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
);

module.exports = authenticateUserSchema;