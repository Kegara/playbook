const user = require('../app/models/user')

describe('Unit test for user class', () => {
    test('Create an user object', () => {
        const user1 = new user(1, 'PlayerOneV', 'Paulo', 'biografia')

        expect(user1.id).toBe(1)
        expect(user1.username).toBe('PlayerOneV')
        expect(user1.name).toBe('Paulo')
        expect(user1.bio).toBe('biografia')
        expect(user1.dateCreated).not.toBeUndefined()
        expect(user1.lastUpdated).not.toBeUndefined()

    })

    test('Add getters', () => {
        const user2 = new user(2, 'Airgetlan', 'Eragon', 'Bio')

        expect(user2.getUsername).toBe('Airgetlan')
        expect(user2.getBio).toBe('Bio')
        expect(user2.dateCreated).not.toBeUndefined()
        expect(user2.lastUpdated).not.toBeUndefined()
    })

    test('Add setters', () => {
        const user3 = new user(3, 'Joshxx', 'Ralf', 'Bio')
        user3.setUsername = "Kvothe"
        expect(user3.username).toBe('Kvothe')

        user3.setBio = 'New bio'
        expect(user3.bio).toBe('New bio')
    })
})  