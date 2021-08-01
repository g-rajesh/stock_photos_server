const dotenv = require("dotenv");

const {
     parsed: { CLIENT_ID },
} = dotenv.config();

module.exports = { CLIENT_ID };
