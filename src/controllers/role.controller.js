const UnitCtrl = {};
const { Unit } = require('../database/database');

UnitCtrl.getUnits = async (req, res) => {
    try {
        let units =  await Unit.findAll();
        res.json({
            ok: true,
            data: units
        });
    }catch (e) {
        res.status(500).json({
            ok: false,
            error: e
        });
    }
}

UnitCtrl.createUnit = async (req, res) => {

    let unit = Unit.build(req.body);
    try {
        let unitDB = await unit.save()
        res.json({
            ok: true,
            data: unitDB
        });
    }catch (e) {
        res.status(500).json({
            ok: false,
            message: 'Fail saving unit in data base',
            error: e
        })
    }
}
UnitCtrl.getUnit = async (req, res) => {
    let unit = await Unit.findByPk(req.params.id);

    if (!unit)
        return res.json({
            ok: false,
            message: `unit with id ${req.params.id} not exists`
        });

    res.json({
        ok: true,
        data: unit
    });
}

UnitCtrl.updateUnit = async (req, res) => {
    let id = req.params.id
    let unit = await Unit.update(req.body, {where: {id}});
    res.json({
        ok: true,
        data: unit
    });
}
UnitCtrl.deleteUnit = async (req, res) => {
    let id = req.params.id
    let unit = await Unit.delete({where: {id}});
    res.json({
        ok: true,
        data: unit
    });
}

module.exports = UnitCtrl;

