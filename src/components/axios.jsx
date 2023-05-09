import axios from 'axios';
import { useState } from 'react';

const AxiosPoke = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
            setPokemon(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={getPokemon}>Get Pokemon</button>
            <ul>
                {pokemon.map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosPoke;