let mainCharacters = require('./characters.json').map(character => character.name)

function isTBBTCharacter (name = 'null') {
    // normalize string
    
    let formatedName = name.toLowerCase().trim()
    formatedName = formatedName.charAt(0).toUpperCase() + formatedName.slice(1)
    
    return mainCharacters.includes(formatedName)
}

module.exports = isTBBTCharacter
