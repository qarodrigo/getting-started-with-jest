const isTBBTCharacter = require('../isTBBTCharacter')

describe('search character', () => {

    test("should find character in characters JSON", () => {  
        
        expect(isTBBTCharacter('Barry')).toBe(true)
        
        expect(isTBBTCharacter('ShElDon')).toBe(true)

        expect(isTBBTCharacter('Felipe')).toBe(false)

        expect(isTBBTCharacter('Amy           ')).toBe(true)
        
        expect(isTBBTCharacter('')).toBe(false)
        
    })      
})  