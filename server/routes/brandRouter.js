const Router = require('express')
const router = new Router()


router.post('/', (req, res) => {
    res.json({ message: 'Brand created' });
});

router.get('/', (req, res) => {
    res.json({ message: 'List of brands' });
});



module.exports = router