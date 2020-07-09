const { Router } = require('express');
const router = Router();

const productsRouter = require('./product.routes');
const categoryRouter = require('./category.routes');
const unitRouter = require('./unit.routes');
const userRouter = require('./user.routes');
const roleRouter = require('./role.routes');

router.use('/products', productsRouter);
router.use('/categories', categoryRouter);
router.use('/units', unitRouter);
router.use('/users', userRouter);
router.use('/roles', roleRouter);

module.exports = router;
