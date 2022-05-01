const userService = require('../app/models/userService')

describe('Test for userService', () => {
    test('1.- Create a new user using the UserService', () => {
        const user = userService.create(1, 'PlayerOne', 'Paulo')

        expect(user.username).toBe('PlayerOne')
        expect(user.name).toBe('Paulo')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test('2.- Get all user data in a list', () => {
        const user = userService.create(1, 'thom', 'Thomas')
        const userInfoList = userService.getInfo(user)

        //console.log(userInfoList);

        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe('thom')
        expect(userInfoList[2]).toBe('Thomas')
        expect(userInfoList[3]).toBe('Sin bio')
    })

    test('3.- Update username', () => {
        const user = userService.create(1, 'thom', 'Thomas')
        userService.updateUserName(user, 'Ray')

        expect(user.username).toBe('Ray')
    })

    test('4.- Given a list of users give me the list of usernames', () => {
        const user = userService.create(1, 'PlayerOne', 'Paulo')
        const user2 = userService.create(2, 'PlayerTwo', 'Paulo')
        const user3 = userService.create(3, 'PlayerThree', 'Paulo')

        const userNames = userService.getUserNames([user, user2, user3])

        expect(userNames).toContain('PlayerOne')
        expect(userNames).toContain('PlayerTwo')
        expect(userNames).toContain('PlayerThree')
    })
})