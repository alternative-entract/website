const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not  be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product name'],
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    image: {
      type: String,
      default: '/uploads/defaultProduct.jpg',
    },
    category: {
      type: String,
      required: [true, 'Please provide product category'],
      enum: ['hygiène', 'entretien', 'produits frais', 'alimentation'],
    },
    company: {
      type: String,
      required: [true, 'Please provide  company'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    inVentory: {
      type: Number,
      required: true,
      default: 100,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
