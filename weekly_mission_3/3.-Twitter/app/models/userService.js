const User = require('./user')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, 'Sin bio')
    }

    static getInfo(User) {
        const array = Object.keys(User).map(key => User[key]) //Convertimos el objeto en un array
        return array
    }

    static  updateUserName(user, name) {
        user.username = name
    }

    static getUserNames(users) {
        var names = []
        users.forEach(element => {
            //console.log(element.username);
            names.push(element.username)
        });

        return names
    }
}

module.exports = UserService