const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");
const CustomError = require('../errors')
const path = require('path')
const cloudinary = require('cloudinary').v2
const fs = require('fs')
const createProduct = async (req, res) => {
  req.body.user = req.user.userId
  const product = await Product.create(req.body)
  res.status(StatusCodes.CREATED).json({ product })
}

const getAllProducts = async (req, res) => {
  const products = await Product.find({})
  res.status(StatusCodes.OK).json({ products, count: products.length })
}

const getSingleProduct = async (req, res) => {
  const { id: ProductId } = req.params
  const product = await Product.findOne({ _id: ProductId })
  if (!product) {
    throw new CustomError.BadRequestError(` ${ProductId}`)
  }
  res.status(StatusCodes.OK).json({ product })
}

const updateProduct = async (req, res) => {
  const { id: ProductId } = req.params
  const product = await Product.findOneAndUpdate({ _id: ProductId }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!product) {
    throw new CustomError.BadRequestError(` ${ProductId}`)
  }
  res.status(StatusCodes.OK).json({ product })
}

const deleteProduct = async (req, res) => {
  const { id: ProductId } = req.params
  const product = await Product.findByIdAndDelete({ _id: ProductId })
  if (!product) {
    throw new CustomError.BadRequestError(` ${ProductId}`)
  }
  res.status(StatusCodes.OK).json({ ms: 'Product deleted' })
}

//
// uplad image normal
//

// const uploadImage = async (req, res) => {
//   if (!req.files) {
//     throw new CustomError.BadRequestError('No file uploaded')
//   }

//   const productImage = req.files.image

//   if (!productImage.mimetype.startsWith('image')) {
//     throw new CustomError.BadRequestError('Please upload image')
//   }

//   const maxSize = 1024 * 1024

//   if (productImage.size > maxSize) {
//     throw new CustomError.BadRequestError(
//       `Please upload image smaller ${maxSize}Kb`
//     )
//   }

//   const imagePath = path.join(
//     __dirname,
//     '../public/uploads/' + `${productImage.name}`
//   )
//   await productImage.mv(imagePath)
//   return res
//     .status(StatusCodes.OK)
//     .json({ image: { src: `/uploads/${productImage.name}` } })
// }

// upload image with cloudinary
const uploadImage = async (req, res) => {
  if (!req.files) {
    throw new CustomError.BadRequestError('No file uploaded')
  }
  const productImage = req.files.image
  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please upload an image')
  }

  const maxSize = 1024 * 1024

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      `Please upload an image smaller than ${maxSize} Kb`
    )
  }

  // Utilisez await pour attendre que l'upload soit terminé
  const result = await cloudinary.uploader.upload(productImage.tempFilePath, {
    use_filename: true,
    folder: 'file-upload',
  })

  // Supprimez le fichier temporaire sur le serveur
  fs.unlinkSync(productImage.tempFilePath)

  // Renvoyez la réponse avec l'URL de l'image uploadée depuis Cloudinary
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } })
}


module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
