const { Router } = require('express');
const router = Router();
const { createRole, getRoles, updateRole, getRole, deleteRole } = require('../controllers/Role.controller')

router.get('/', getRoles);
router.post('/', createRole);
router.get('/:id', getRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

module.exports = router;
