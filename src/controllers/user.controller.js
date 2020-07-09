const userCtrl = {};
const { User } = require('../database/database');

userCtrl.createUser = async (req, res) => {
    let {name, email, password} = req.body;
    let user = User.build({name, email, password});
    res.json(user);
}

module.exports = userCtrl;

