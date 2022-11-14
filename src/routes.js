const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getPlaces);
router.get('/:id', controller.getPlace);

module.exports = router;
