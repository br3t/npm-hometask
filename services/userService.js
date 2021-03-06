const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    all() {
        const items = UserRepository.getAll();
        if(!items) {
            return null;
        }
        return items;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    create(data) {
        const newUserId = UserRepository.create(data);
        if(!newUserId) {
            return null;
        }
        return newUserId;
    }

}

module.exports = new UserService();