const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    const term = req.query.term

    // Tien do your stuff here
    res.send('This is a node-js server, your searched key word is ' + term);
});

module.exports = router;