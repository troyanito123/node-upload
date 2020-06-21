const CategoryCtrl = {};
const { Category } = require('../database/database');

CategoryCtrl.getCategories = async (req, res) => {
    try {
        let categories =  await Category.findAll();
        res.json({
            ok: true,
            data: categories
        });
    }catch (e) {
        res.status(500).json({
            ok: false,
            error: e
        });
    }
}

CategoryCtrl.createCategory = async (req, res) => {

    let category = Category.build(req.body);
    try {
        let categoryDB = await category.save()
        res.json({
            ok: true,
            data: categoryDB
        });
    }catch (e) {
        res.status(500).json({
            ok: false,
            message: 'Fail saving category in data base',
            error: e
        })
    }
}
CategoryCtrl.getCategory = async (req, res) => {
    let category = await Category.findByPk(req.params.id);

    if (!category)
        return res.json({
            ok: false,
            message: `Category with id ${req.params.id} not exists`
        });

    res.json({
        ok: true,
        category
    });
}

CategoryCtrl.updateCategory = async (req, res) => {
    let id = req.params.id
    let category = await Category.update(req.body, {where: {id}});
    res.json({
        ok: true,
        category
    });
}
CategoryCtrl.deleteCategory = async (req, res) => {
    let id = req.params.id
    let category = await Category.delete({where: {id}});
    res.json({
        ok: true,
        category
    });
}

module.exports = CategoryCtrl;

