import logo from './logo.svg';
import './App.css';
import {
    TotalPokemonsByTypeForm,
    TotalPokemonsByTypesForm,
    GetPokemonIdByItsNameForm,
    GetPokemonBaseStatsForm, GetPokemonsByIdsForm, PokemonBelongToTypeForm
} from "./queryForms"

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <TotalPokemonsByTypeForm />
                <hr />
                <TotalPokemonsByTypesForm />
                <hr />
                <GetPokemonIdByItsNameForm />
                <hr />
                <GetPokemonBaseStatsForm />
                <hr/>
                <GetPokemonsByIdsForm />
                <hr />
                <PokemonBelongToTypeForm />
            </header>
        </div>
    );
}

export default App;
