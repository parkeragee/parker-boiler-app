'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountsModel = new Schema({
    businessName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    phoneNumber: { type: String },
    website: { type: String },
    users: { type: Schema.Types.ObjectId, ref: 'Users' }
});

module.exports = mongoose.model('Accounts', accountsModel);