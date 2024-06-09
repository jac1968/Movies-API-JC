const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Genre = sequelize.define('genre', {
    //  Define the columns (fields) here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Genre;