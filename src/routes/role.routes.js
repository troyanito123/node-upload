const { Router } = require('express');
const router = Router();
const { createUnit, getUnits, updateUnit, getUnit, deleteUnit } = require('../controllers/unit.controller')

router.get('/', getUnits);
router.post('/', createUnit);
router.get('/:id', getUnit);
router.put('/:id', updateUnit);
router.delete('/:id', deleteUnit);

module.exports = router;
