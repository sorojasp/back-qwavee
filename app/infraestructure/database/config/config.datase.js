"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequalize = new sequelize_1.Sequelize('finances', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.sqlite'
});
exports.default = sequalize;
