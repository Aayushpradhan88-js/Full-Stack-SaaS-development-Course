//UTILITY FILE FOR ENVIRONMENT VARIABLES

// const dotenv = require('dotenv')
// dotenv.config();
const DB_URL = process.env.DB_URL;
console.log("DATABASE URL:", DB_URL);

module.exports = {DB_URL};