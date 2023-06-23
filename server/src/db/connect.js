const mongoose = require('mongoose')

const connectDB = () => {
  try {
    mongoose.set('strictQuery', true)
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log('mongoose Connected!'))
  } catch (error) {
    console.log(error)
    console.log('mongoose Error')
  }
}

module.exports = connectDB
