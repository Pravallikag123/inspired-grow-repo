const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

router.post('/add', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body)
    await newCustomer.save()
    res.status(201).json(newCustomer)
  } catch (err) {
    res.status(400).json({ message: 'Error creating customer', error: err })
  }
})



module.exports = router