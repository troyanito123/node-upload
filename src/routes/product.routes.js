const { Router } = require('express');
const router = Router();
const { createProduct, getProducts, updateProduct, getProduct } = require('../controllers/product.controller')

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', updateProduct);

module.exports = router;
