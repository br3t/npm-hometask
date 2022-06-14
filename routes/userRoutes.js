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
});

module.exports = router;