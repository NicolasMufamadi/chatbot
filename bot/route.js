const router = require('express').Router()
const model = require('./GreetingModel');

router.post('/',model);

module.exports = router;