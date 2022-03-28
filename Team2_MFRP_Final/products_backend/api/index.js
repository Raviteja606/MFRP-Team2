const express = require('express')
const router = express.Router()
//api/index.js
require('./routes/medproduct')(router)

module.exports = router