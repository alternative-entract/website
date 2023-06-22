require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const serverless = require('serverless-http')
const fileUpload = require('express-fileupload')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize')

// routes
const authRouter = require('../src/routes/authRoutes')

//middleware
const notFoundMiddleware = require('../src/middleware/not-found')
const errorHandler = require('../src/middleware/error-handler')
const {
  JWT_SECRET,
  CLOUD_NAME,
  CLOUD_API_KEY,
  CLOUD_API_SECRET,
} = require('../src/utils/settings')

// upload file with cloudinary use V2
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
})

app.set('trust proxy', 1)
app.use(rateLimiter({ windowMs: 15 * 60 * 1000, max: 60 }))
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(mongoSanitize())

app.use(express.static('./public'))

app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(JWT_SECRET))
app.use(fileUpload({ useTempFiles: true }))

app.use('/.netlify/functions/orders', router)
app.use(notFoundMiddleware)
app.use(errorHandler)

module.exports.handler = serverless(app)
