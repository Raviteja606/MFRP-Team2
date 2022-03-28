const express = require('express')
const router = express.Router()
//api/index.js
require('./routes/user')(router)

module.exports = router