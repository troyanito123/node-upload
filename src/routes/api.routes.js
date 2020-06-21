const { Router } = require('express');
const router = Router();

const productsRouter = require('./product.routes');
const categoryRouter = require('./category.routes');
const unitRouter = require('./unit.routes');

router.use('/products', productsRouter);
router.use('/categories', categoryRouter);
router.use('/units', unitRouter);

module.exports = router;
