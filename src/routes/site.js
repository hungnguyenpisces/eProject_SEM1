const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController.js');

router.get('/', siteController.index)


module.exports = router;