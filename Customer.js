const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String },
  profile_picture: { type: String },
  customer_type: { type: String, required: true },
  gst_number: { type: String },
  tax_number: { type: String },
  credit_limit: { type: Number, default: -1.00 },
  previous_due: { type: Number, default: 0.00 },
  address: {
    street: String,
    city: String,
    state: String,
    postal_code: String
  },
  shipping_address: {
    street: String,
    city: String,
    state: String,
    postal_code: String
  }
})

module.exports = mongoose.model('Customer', customerSchema)






