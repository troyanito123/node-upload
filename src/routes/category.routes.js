const { Router } = require('express');
const router = Router();
const { createCategory, getCategories, updateCategory, getCategory, deleteCategory } = require('../controllers/category.controller')

router.get('/', getCategories);
router.post('/', createCategory);
router.get('/:id', getCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
