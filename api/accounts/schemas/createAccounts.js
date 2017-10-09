'use strict';

const Joi = require('joi');

const createAccountSchema = Joi.object({
    businessName: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    website: Joi.string().uri()
});

module.exports = createAccountSchema;