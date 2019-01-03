const router = require('express').Router();

const cdn = require('./controller');

router.route('/a').get(cdn.default);
router.route(/r+\/+\w/).get(cdn.getFiles);
router.route('/list').post(cdn.getList);
router.route('/upload').post(cdn.putFiles);

module.exports = router;
