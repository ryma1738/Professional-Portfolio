const router = require('express').Router();
const sendMail = require('../../utils/email');


router.post('/', (req, res) => {
    sendMail(req.body.email, req.body.subject, req.body.message, (err, data) => {
        if (err) {
            res.status(500).json(err);
        } else res.sendStatus(200);
    });
    
});

module.exports = router;