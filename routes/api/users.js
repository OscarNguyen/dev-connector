const express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => res.json({ msg: 'cc user' }));

module.exports = router;
