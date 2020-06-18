const { Router } = require('express');
const router = Router();

const productsRouter = require('./product.routes');

router.use('/products', productsRouter);

module.exports = router;
