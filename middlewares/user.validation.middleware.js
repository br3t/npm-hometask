const { user } = require('../models/user');
const UserService = require('../services/userService');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    req.errorMessage = '';
    for(let par in user) {
        user[par].forEach(ruleData => {
            let ruleCompiled = new RegExp(ruleData.rule);
            let testFailed = false;
            if(!ruleCompiled.test(req.query[par]) && ruleData.followed) { // two separate blocks for readability
                testFailed = true;
            }
            if(ruleCompiled.test(req.query[par]) && !ruleData.followed) {
                testFailed = true;
            }
            if(testFailed) {
                req.errorMessage += `${ruleData.errorMessage};\n`;
            }
        });
        // basic validation is OK, let's check user uniqueness
        if(req.errorMessage == '') {
            const sameEmailUser = UserService.search({email:req.query.email});
            if(sameEmailUser) {
                req.errorMessage += `User with email "${req.query.email}" is already exist;\n`;
            }
            const samePhoneUser = UserService.search({phoneNumber:req.query.phoneNumber});
            if(samePhoneUser) {
                req.errorMessage += `User with phoneNumber "${req.query.phoneNumber}" is already exist;\n`;
            } 
        }
    }
    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;