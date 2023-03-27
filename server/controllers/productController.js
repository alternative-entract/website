const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");
const CustomError = require("../errors");

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

const getSingleProduct = async (req, res) => {
  const { id: ProductId } = req.params;
  const product = await Product.findOne({ _id: ProductId });
  if (!product) {
    throw new CustomError.BadRequestError(` ${ProductId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  const { id: ProductId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: ProductId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw new CustomError.BadRequestError(` ${ProductId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  const { id: ProductId } = req.params;
  const product = await Product.findByIdAndDelete({ _id: ProductId });
  if (!product) {
    throw new CustomError.BadRequestError(` ${ProductId}`);
  }
  res.status(StatusCodes.OK).json({ ms: "Product deleted" });
};

const uploadImage = async (req, res) => {
  res.send("upload image  product");
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
