const userService = require('./userService')

class UserView {
    static createUser(payload) {

        if (payload === null) {
            return { error: 'payload no existe' }
        } else if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
            return userService.create(payload.id, payload.username, payload.name)
        } else {
            return { error: 'Error, todas las propiedades necesitan tener un valor valido' }
        }
    }
}

module.exports = UserView