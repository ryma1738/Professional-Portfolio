const router = require('express').Router();
const emailRoutes = require('./email');

router.use('/email', emailRoutes);

module.exports = router;