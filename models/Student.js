const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connection')

const Student = sequelize.define('Student', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
name: {
    type: DataTypes.STRING,
    allowNull: false,
},
rollNumber: {
    type: DataTypes.STRING,
    allowNull: false,
},
marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
}, {
timestamps: true,
tableName: 'students',
});

// Sync the database
sequelize.sync()
.then(() => {
    console.log('Student table created or already exists.');
})
.catch(err => {
    console.error('Error syncing database:', err);
});

module.exports = Student