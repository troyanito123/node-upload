const { Router } = require('express');
const router = Router();

const productsRouter = require('./product.routes');
const categoryRouter = require('./category.routes');

router.use('/products', productsRouter);
router.use('/categories', categoryRouter);

module.exports = router;
