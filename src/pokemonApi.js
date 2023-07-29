import sortFunctions from "./sortFunctions";

export const totalPokemonsByType = async(pokemonType) => {
    const data = await fetch('https://pokeapi.co/api/v2/type/' + pokemonType).then((response) => {
        return response.json()
    })

    return 'Total Pokemons with ' + pokemonType + ' type: ' + data.pokemon.length
}

export const totalPokemonsByTwoTypes = async(pokemonTypeOne, pokemonTypeTwo) => {
    const dataTypeOne = await fetch('https://pokeapi.co/api/v2/type/' + pokemonTypeOne).then((response) => {
        return response.json()
    })

    const dataTypeTwo = await fetch('https://pokeapi.co/api/v2/type/' + pokemonTypeTwo).then((response) => {
        return response.json()
    })

    let dataTypesTotal = parseInt(dataTypeOne.pokemon.length) + parseInt(dataTypeTwo.pokemon.length)
    const dataPokemonTypes = [...dataTypeOne.pokemon, ...dataTypeTwo.pokemon]
    // return 'Total Pokemons with ' + pokemonTypeOne + ' type and ' + pokemonTypeTwo +' type: ' + dataTypesTotal
    return dataPokemonTypes

}

export const getPokemonByNameOrId = async (pokemon) => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon).then((response) => {
        return response.json()
    })

    return {
        pokemon_id: 'Pokemon ID: ' + data.id,
        base_stats: data.stats
    }
}

export const getPokemonsByIds = async (pokemonsIds, orderBy) => {
    const pokemonsData = []

    for (let it of pokemonsIds) {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + it).then((response) => {
            return response.json()
        })

        pokemonsData.push({
            id: data.id,
            name: data.name,
            type: data.types[0].type.name,
            weight: data.weight
        })
    }

    return pokemonsData.sort(sortFunctions[orderBy])
}

export const getPokemonBelongsToType = async (pokemonId, pokemonType) => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId).then((response) => {
        return response.json()
    })
    let isPokemonBelongsToType = data.types.find(({ type }) => type.name === pokemonType)

    return (isPokemonBelongsToType) ? `Pokemon ${data.name} belongs to type ${pokemonType}` :
        `Pokemon ${data.name} does not belongs to type ${pokemonType}`
}

