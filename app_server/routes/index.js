const express = require('express');
const router = express.Router();
const ctrlhome = require('../controllers/home');
const ctrlab = require('../controllers/ab');
const ctrlsign = require('../controllers/sign');
const ctrlregister = require('../controllers/register');

router.get('/', ctrlhome.home);
router.get('/music', ctrlhome.cat1);
router.get('/festivals', ctrlhome.cat2);

router.get('/about', ctrlab.about);
router.get('/sign', ctrlsign.signin);
router.get('/register', ctrlregister.register); 

module.exports = router;
