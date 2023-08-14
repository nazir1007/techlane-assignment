const express = require("express");
const router = express.Router();
const path  = require ("path")

console.log("Router loaded");

router.use('/api', require('./api'));

module.exports = router;