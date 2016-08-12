'use strict';

module.exports = function(sequelize, DataType){
    var Item = sequelize.define('Item', {
	id: {type: DataType.INTEGER, autoIncrement: true, primaryKey: true},
	name: {type: DataType.STRING, allowNull: true},
	type: {type: DataType.STRING, allowNull: false},
	dollar: DataType.INTEGER,
	cent: DataType.INTEGER,
	active: DataType.BOOLEAN
    })
    return Item;
};
