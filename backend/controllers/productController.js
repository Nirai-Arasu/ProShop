import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

//@desc Fetch all products
//@route Get /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (products.length > 0) {
    res.json(products);
    return;
  }
  res.status(404).json({ message: 'No products' });
});

//@desc Fetch a product
//@route Get /api/products/:id
//@access Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById({ _id: req.params.id });
  if (product) {
    res.json(product);
    return;
  }
  res.status(404);
  throw new Error('Product not found');
});

export { getProducts, getProductsById };
