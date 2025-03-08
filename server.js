const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const customerRoutes = require('./routes/customerRoutes')

const app = express()

app.use(express.json())

connectDB()

app.use('/api/admin/customer', customerRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
