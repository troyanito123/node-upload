module.exports = (connection, type) => {
    return connection.define('units', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        code: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: type.TEXT,
            allowNull: false
        }
    });
}
