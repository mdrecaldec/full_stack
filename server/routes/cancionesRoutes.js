const express = require('express');
const router = express.Router();
const cancionController = require('../controller/cancionController');

router.post('/cancion', cancionController.addCancion);

module.exports = router;
