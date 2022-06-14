const { user } = require('../models/user');
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
        // TODO: check user uniqueness
    }
    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;