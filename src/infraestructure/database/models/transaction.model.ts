
import {Model, DataTypes} from "sequelize";
import sequalize from "../../database/config/config.datase"

class TransactionModel extends Model{}

TransactionModel.init({

    id:{
        type: DataTypes.INTEGER, 
        primaryKey:true,
        autoIncrement:true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    category:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    date:{
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    sequelize:sequalize,
    modelName:'transaction'
})

export default TransactionModel;