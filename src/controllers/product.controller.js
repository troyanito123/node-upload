const productCtrl = {};
const { Product } = require('../database/database');
const fs = require('fs-extra');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLAUDINARY_NAME,
    api_key: process.env.CLAUDINARY_API_KEY,
    api_secret: process.env.CLAUDINARY_API_SECRET
})

productCtrl.getProducts = async (req, res) => {
    let page = req.query.page || 1;
    let category = req.query.category;
    let limit = 5;
    let offset = (page - 1) * limit
    let where = {status: 'ACTIVE'};
    if (category) 
        where = {status: 'ACTIVE', category}
    console.log(where);
    let products = await Product.findAll({
        limit,
        offset,
        where,
        attributes: {exclude: ['status']},
        order: [
            ['createdAt', 'DESC']
        ]
    });
    res.json({
        ok: true,
        page,
        data: products
    });
}

productCtrl.createProduct = async (req, res) => {

    let product = Product.build(req.body);
    try {
        let urls = [];
        for (let file of req.files){
            const result = await cloudinary.v2.uploader.upload(file.path);
            urls.push(result.url);
            await fs.unlink(file.path)
        }
        product.images = urls;
        let productdb = await product.save()
        res.json({
            ok: true,
            data: productdb
        });
    }catch (e) {
        res.status(500).json({
            ok: false,
            message: 'Fail saving product in data base',
            error: e
        })
    }
}
productCtrl.getProduct = async (req, res) => {
    let product = await Product.findByPk(req.params.id);

    if (!product)
        return res.json({
            ok: false,
            message: `Product with id ${req.params.id} not exists`
        });

    res.json({
        ok: true,
        product
    });
}

productCtrl.updateProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.update(req.body, {where: {id}});
    res.json({
        ok: true,
        product
    });
}
productCtrl.deleteProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.update({status: "DELETE"}, {where: {id}});
    res.json({
        ok: true,
        product
    });
}

module.exports = productCtrl;

