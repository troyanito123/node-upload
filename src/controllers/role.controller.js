const roleCtrl = {};
const { Role } = require('../database/database');

roleCtrl.getRoles = async (req, res) => {
    try {
        let roles =  await Role.findAll();
        res.json({
            ok: true,
            data: roles
        });
    }catch (e) {
        res.status(500).json({
            ok: false,
            error: e
        });
    }
}

roleCtrl.createRole = async (req, res) => {

    let {name, code, description} = req.body;

    let role = Role.build({name, code, description});
    try {
        let roleDB = await role.save()
        res.json({
            ok: true,
            data: roleDB
        });
    }catch (e) {
        res.status(500).json({
            ok: false,
            message: 'Fail saving ROLE in data base',
            error: e
        })
    }
}
roleCtrl.getRole = async (req, res) => {

    let id = req.params.id
    let role = await Role.findByPk(id);

    if (!role)
        return res.json({
            ok: false,
            message: `Role with id: ${id} not exists`
        });

    res.json({
        ok: true,
        data: role
    });
}

roleCtrl.updateRole = async (req, res) => {
    let id = req.params.id
    let {name, code, description} = req.body;
    let role = await Role.update({name, code, description}, {where: {id}});
    res.json({
        ok: true,
        data: role
    });
}
roleCtrl.deleteRole = async (req, res) => {
    let id = req.params.id
    let role = await Role.delete({where: {id}});
    res.json({
        ok: true,
        data: role
    });
}

module.exports = roleCtrl;

