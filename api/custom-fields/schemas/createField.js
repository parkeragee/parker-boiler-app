'use strict';

const Joi = require('joi');

const createField = Joi.object({
  name: Joi.string().required(),
  shortcutName: Joi.string().required(),
});

module.exports = createField;