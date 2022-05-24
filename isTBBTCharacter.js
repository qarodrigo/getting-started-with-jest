let mainCharacters = require('./characters.json').map(character => character.name)

function normalizeString (string) {

    let formattedName = string.toLowerCase().trim()
    formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1)

    return formattedName

}

function isTBBTCharacter (name = 'null') {
    return mainCharacters.includes(normalizeString(name))
}


module.exports = {
    isTBBTCharacter,
    normalizeString,
} 
    
// module.exports = 
