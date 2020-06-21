module.exports = (connection, type) => {
    return connection.define('product', {
       id: {
           type: type.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
        name: type.STRING,
        price: type.INTEGER,
        unit: type.STRING,
        images: type.ARRAY(type.STRING),
        status: {
            type: type.STRING,
            allowNull: false,
            defaultValue: 'ACTIVE'
        }
    });
}
