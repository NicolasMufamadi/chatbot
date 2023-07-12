const router = require('express').Router()
const model = require('./model');

router.get('/',model);

module.exports = router;