let routes = require('express').Router()

routes.use("/api", require('../controller/BankController'));


module.exports = routes