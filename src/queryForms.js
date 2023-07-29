import {useState} from "react";
import {
    totalPokemonsByTwoTypes,
    totalPokemonsByType,
    getPokemonByNameOrId,
    getPokemonsByIds,
    getPokemonBelongsToType
} from "./pokemonApi";

function QueryResultApiData(props) {
    if (props.data) {
        return (
            <>
               <ul>
                    {props.data.map((item) => <li>{item.pokemon.name}</li>)}
                </ul>
            </>
        )
    }
}

export function TotalPokemonsByTypeForm() {
    const [totPokByTypeValue, setTotPokByTypeValue] = useState('')
    const [queryResult, setQueryResult] = useState(null)

    const findTotalPokemonsByType = () => {
        totalPokemonsByType(totPokByTypeValue).then(data => {
            return data
        }).then(data => {
            setQueryResult(data)
        })
    }

    return (
        <div>
            <form>
                <label>Pokemon Type:
                    <input
                        type="text"
                        value={totPokByTypeValue}
                        onChange={(e) => setTotPokByTypeValue(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={findTotalPokemonsByType}>Search</button>
            <h3>{ queryResult }</h3>
        </div>
    )
}

export function TotalPokemonsByTypesForm() {
    const [totPokByTypeValueOne, setTotPokByTypeValueOne] = useState('')
    const [totPokByTypeValueTwo, setTotPokByTypeValueTwo] = useState('')
    const [queryResult, setQueryResult] = useState(null)

    const findTotalPokemonsByTwoTypes = () => {
        totalPokemonsByTwoTypes(totPokByTypeValueOne, totPokByTypeValueTwo).then(data => {
            return data
        }).then(data => {
            setQueryResult(data)
        })
    }

    const clearSearch = () => {
        setQueryResult(null)
    }

    return (
        <div>
            <form>
                <label>Pokemon Type One:
                    <input
                        type="text"
                        value={totPokByTypeValueOne}
                        onChange={(e) => setTotPokByTypeValueOne(e.target.value)}
                    />
                </label>
                <label>Pokemon Type Two:
                    <input
                        type="text"
                        value={totPokByTypeValueTwo}
                        onChange={(e) => setTotPokByTypeValueTwo(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={findTotalPokemonsByTwoTypes}>Search</button>
            <button onClick={clearSearch}>Clear</button>
            <QueryResultApiData data={queryResult}/>
        </div>
    )
}

export function GetPokemonIdByItsNameForm() {
    const [queryResult, setQueryResult] = useState(null)
    const [pokemonNameValue, setPokemonNameValue] = useState('')

    const searchPokemonIdByNameHandler = () => {
        getPokemonByNameOrId(pokemonNameValue).then(data => {
            return data
        }).then(data => {
            setQueryResult(data)
        })
    }

    const clearSearch = () => {
        setQueryResult(null)
    }

    return (
        <div>
            <form>
                <label>Pokemon Name:
                    <input
                        type="text"
                        value={pokemonNameValue}
                        onChange={(e) => setPokemonNameValue(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={searchPokemonIdByNameHandler}>Search</button>
            <button onClick={clearSearch}>Clear</button>
            <h3>{ queryResult?.pokemon_id }</h3>
        </div>
    )
}

export function GetPokemonBaseStatsForm() {
    const [queryResult, setQueryResult] = useState(null)
    const [pokemonIdValue, setPokemonIdValue] = useState('')

    const searchPokemonStatsByIdHandler = () => {
        getPokemonByNameOrId(pokemonIdValue).then(data => {
            return data
        }).then(data => {
            setQueryResult(data)
        })
    }

    const clearSearch = () => {
        setQueryResult(null)
    }

    return (
        <div>
            <form>
                <label>Pokemon ID:
                    <input
                        type="text"
                        value={pokemonIdValue}
                        onChange={(e) => setPokemonIdValue(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={searchPokemonStatsByIdHandler}>Search</button>
            <button onClick={clearSearch}>Clear</button>
            <ul>
                { queryResult?.base_stats.map((item) => <li id={item.stat.base_stat}> { item.stat.name } </li>) }
            </ul>
        </div>
    )
}

export function GetPokemonsByIdsForm() {
    const [queryResult, setQueryResult] = useState(null)
    const [pokemonsIdsValue, setPokemonsIdsValue] = useState('')
    const [pokemonsOrderValue, setPokemonsOrderValue] = useState('name')

    const searchPokemonsByIdsHandler = () => {
        getPokemonsByIds(pokemonsIdsValue.split(','), pokemonsOrderValue).then(data => {
            return data
        }).then(data => {
            setQueryResult(data)
        })
    }

    const clearSearch = () => {
        setQueryResult(null)
    }

    return (
        <div>
            <form>
                <label>Pokemon IDS(separate by ,):
                    <input
                        type="text"
                        value={pokemonsIdsValue}
                        onChange={(e) => setPokemonsIdsValue(e.target.value)}
                    />
                </label>
                <label>Order by:
                    <select
                        value={pokemonsOrderValue}
                        onChange={(e) => setPokemonsOrderValue(e.target.value)}
                    >
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                        <option value="weight">Weight</option>
                    </select>
                </label>
            </form>
            <button onClick={searchPokemonsByIdsHandler}>Search</button>
            <button onClick={clearSearch}>Clear</button>
            <table>
                {
                    queryResult?.map((item) => {
                        return (
                            <tr id={item.id}>
                                <td> { item.name } </td>
                                <td> { item.type } </td>
                                <td> { item.weight } </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export function PokemonBelongToTypeForm() {
    const [pokemonIdValue, setPokemonIdValue] = useState('')
    const [pokemonTypeValue, setPokemonTypeValue] = useState('')
    const [queryResult, setQueryResult] = useState(null)

    const searchPokemonBelongsToTypeHandler = () => {
        getPokemonBelongsToType(pokemonIdValue, pokemonTypeValue).then(data => {
            return data
        }).then(data => {
            setQueryResult(data)
        })
    }

    const clearSearch = () => {
        setQueryResult(null)
    }

    return (
        <div>
            <form>
                <label>Pokemon ID:
                    <input
                        type="text"
                        value={pokemonIdValue}
                        onChange={(e) => setPokemonIdValue(e.target.value)}
                    />
                </label>
                <label>Pokemon Type:
                    <input
                        type="text"
                        value={pokemonTypeValue}
                        onChange={(e) => setPokemonTypeValue(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={searchPokemonBelongsToTypeHandler}>Search</button>
            <button onClick={clearSearch}>Clear</button>
            <h3>{ queryResult }</h3>
        </div>
    )
}

export default {
    TotalPokemonsByTypeForm,
    TotalPokemonsByTypesForm,
    GetPokemonIdByItsNameForm,
    GetPokemonBaseStatsForm,
    GetPokemonsByIdsForm,
    PokemonBelongToTypeForm,
}

