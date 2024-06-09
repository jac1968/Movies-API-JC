const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Movie = sequelize.define('movie', {
    //  Define the columns (fields) here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Movie;