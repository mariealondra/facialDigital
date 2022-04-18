const { Router, json } = require('express');
const router = Router();

const user = require('../models/user');
router.get('/', async(req, res) => {
    const fadiapp = await user.find();
    res.json(fadiapp);

});

router.post('/', async (req, res)=> {
    const {nombre, email, passw} = req.body;
    console.log(req.body);
    const newUser = new user({nombre, email, passw})
    res.send('received')
});

module.exports = router;