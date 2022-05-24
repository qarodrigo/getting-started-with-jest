const isTBBTModule = require('../isTBBTCharacter')

const isTBBTCharacter = isTBBTModule.isTBBTCharacter
const normalizeString = isTBBTModule.normalizeString

describe('search character', () => {
    
    test("should normalize string", () => {  
        expect(normalizeString('aMY')).toEqual('Amy')
       
        expect(normalizeString('Barry')).toEqual('Barry')
        
        expect(normalizeString("")).toEqual("")
    })

    test("should find character in characters JSON", () => {  
        expect(isTBBTCharacter('Barry')).toBe(true)
    })


    test("should find character with deconfigured name in characters JSON", () => {
        expect(isTBBTCharacter('ShElDon')).toBe(true)

        expect(isTBBTCharacter('Amy           ')).toBe(true)
    })

    test("shouldn't find character in JSON", () => {
        expect(isTBBTCharacter('Felipe')).toBe(false)
       
        expect(isTBBTCharacter('     ')).toBe(false)
    })

})  

