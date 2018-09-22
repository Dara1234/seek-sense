const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('This is a node-js server');
});

module.exports = router;