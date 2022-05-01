const UserView = require("../app/models/userView")

describe('Test for UserView', () => {
    test('Return an error object when try to create a new user with an null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test('Return an error object when try to create a new user with a payload with missing properties', () => {
        const payload = { username: 'Username' }
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test('Create a user by a given valid payload', () => {
        const payload = { username: 'Username', id:1, name:'name' }
        const result = UserView.createUser(payload)

        expect(result.name).toBe('name')
        expect(result.username).toBe('Username')
        expect(result.id).toBe(1)
    })
})