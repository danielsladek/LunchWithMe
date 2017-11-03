import db from '../../models/';

export const productsController = async (req, res) => {
  const products = await db.Product.findAll({
    include: ['category'],
  });

  res.json({ products });
};

export const categoriesController = async (req, res) => {
  const categories = await db.ProductCategory.findAll({
    include: ['products'],
  });

  res.json({ categories });
};

export const productDetailController = async (req, res) => {
  const { params } = req;
  const product = await db.Product.findById(params.id, {
    include: ['category'],
  });

  if (!product) {
    return res.status(404).json({ error: 'Not found' });
  }

  res.json({ product });
};
