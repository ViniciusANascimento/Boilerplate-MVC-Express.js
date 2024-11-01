const router = require('express')();

router.get('/', (req, res) => {
    res.status(200).send('Welcome to the Estudos API!');
})

module.exports = router;