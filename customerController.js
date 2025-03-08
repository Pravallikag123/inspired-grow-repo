const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

router.post('/add', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      gender,
      profile_picture,
      customer_type,
      gst_number,
      tax_number,
      credit_limit,
      previous_due,
      address,
      shipping_address
    } = req.body;

  
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newCustomer = new Customer({
      first_name,
      last_name,
      email,
      phone,
      gender,
      profile_picture,
      customer_type,
      gst_number,
      tax_number,
      credit_limit: creditLimit,
      previous_due: previousDue,
      address,
      shipping_address
    });
    await newCustomer.save();

    res.status(201).json({
      message: "Customer created successfully",
      customer: newCustomer
    });

  } catch (err) {
    console.error("Error during customer creation:", err)

    }

    res.status(400).json({
      message: 'Error creating customer',
      error: err.message,
      stack: err.stack
    })
  }
)
