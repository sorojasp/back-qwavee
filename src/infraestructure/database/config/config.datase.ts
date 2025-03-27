import { Sequelize } from "sequelize";

const sequalize:Sequelize = new Sequelize('finances', 'user', 'pass', {
    dialect:'sqlite',
    host: './dev.sqlite'

})

export default sequalize;