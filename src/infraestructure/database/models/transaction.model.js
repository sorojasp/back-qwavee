"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_datase_1 = __importDefault(require("../../database/config/config.datase"));
class TransactionModel extends sequelize_1.Model {
}
TransactionModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: config_datase_1.default,
    modelName: 'transaction'
});
exports.default = TransactionModel;
