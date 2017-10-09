'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customFieldsModel = new Schema({
    name: { type: String, required: true, index: { unique: true } },
    shortcutName: { type: String, required: true },
    options: { type: Array },
    account: { type: Schema.Types.ObjectId, ref: 'Accounts' }
});

module.exports = mongoose.model('CustomFields', customFieldsModel);