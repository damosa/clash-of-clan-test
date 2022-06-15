const { Router } = require('express');
const { getClans } = require('../controllers/clans');

const router = Router();

router.get('/', getClans);

module.exports = router;
