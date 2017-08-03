'use strict';

const Joi = require('joi');

const checkUserSchema = Joi.object({
  email: Joi.string()
});

module.exports = checkUserSchema;