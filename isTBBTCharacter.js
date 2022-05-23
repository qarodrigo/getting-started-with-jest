function isTBBTCharacter (name = 'null'){
    
    const mainCharacters = ['Sheldon', 'Howard', 'Raj', 'Leonard', 'Penny', 'Bernadette', 'Amy', 'Stuart', 'Leslie', 'Emily',
    'Kurt', 'Eric', 'Mary', 'Barry', 'Beverly', 'Wil', 'Zack', 'Priya', 'Arthur', 'Lucy', 'Claire']

    // normalize string

    let formatedName = name.toLowerCase().trim()
    formatedName = formatedName.charAt(0).toUpperCase() + formatedName.slice(1)
    return mainCharacters.includes(formatedName)
}

module.exports = isTBBTCharacter