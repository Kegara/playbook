describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(3);
    });
  })

  const Spiderman = require('./../app/spiderman')

  describe("Unit test for Spiderman class", () => {
      test('(1) Create an spiderman object', () => {
          const Andrew = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')
  
          expect(Andrew.name).toBe('Spiderman Sony')
          expect(Andrew.age).toBe(31)
          expect(Andrew.actor).toBe('Andrew Garfield')
          expect(Andrew.movies).toBe(2)
          expect(Andrew.studio).toBe('Sony')
  
      });
  
      test('(2) Use the method getInfo()', () => {
          const Tom = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel')
          expect(Tom.getInfo()).toBe("Hey soy Tom Holland from Marvel studio")
      })
  })