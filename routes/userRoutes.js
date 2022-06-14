const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.get('/', (req, res) => {
    const list = UserService.all();
    if(list) {
        res.send(list);
    } else {
        res.send('Can`t get users');
    }
});

router.get('/:id', (req, res) => {
    const user = UserService.search({id:req.params.id});
    if(user) {
        res.send(user);
    } else {
        res.send('User not found');
    }
});

router.post('/', (req, res, next) => {
    next();
    if(req.errorMessage) {
        res.send(`Can't create user.\nError: ${req.errorMessage}`);
    } else {
        console.log('save data');
        res.send('User created');
    }
}, createUserValid);

module.exports = router;