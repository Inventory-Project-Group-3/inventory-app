const express = require('express');
const router = express.Router();
const itemRouter = require('./items');

// different model routers
router.use('/sauces', require('./sauces'));
router.use('/items', require('./items'));

module.exports = router;
