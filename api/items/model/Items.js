'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsModel = new Schema({
  name: { type: String, required: true },
  perStudentQty: { type: Number, required: true },
  qtyNeeded: { type: Number, required: true },
  qtyReceived: { type: Number },
  qtyTeacherPurchased: { type: Number },
  estimatedCost: { type: Number },
  actualCost: { type: Number },
  imageUrl: { type: String },
  purchaseUrl: { type: String },
  adminId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Items', itemsModel);