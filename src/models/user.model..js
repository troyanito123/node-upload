module.exports = (connection, type) => {
    return connection.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: type.TEXT,
            allowNull: false
        },
        location: {
            type: type.STRING,
            defaultValue: '-17.442187,-66.1615182'
        }
    });
}
