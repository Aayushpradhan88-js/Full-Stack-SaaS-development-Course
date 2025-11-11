import { Sequelize, DataTypes } from "sequelize"
import { DB_URL } from "../utils/env.js";
import { SELECT } from "sequelize/lib/query-types";
const sequelize = new Sequelize(DB_URL);

sequelize.authenticate()
    .then(() => {
        console.log("database connected successfully")
    }).catch((err) => {
        console.log("error", err.stack)
    })

const db = {
    Sequelize : sequelize,
    sequelize: sequelize
};

export {db}