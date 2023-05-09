import React from 'react'

const Fetch = () => {
    // set state variables
    const [pokes, setPokes] = React.useState([])
    // Fetch API
    const getPokes = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        // get response from API
        const data = await response.json()
        // have json go through the data and set it to state
        setPokes(data.results)
    }
    // Render
    return (
        <div>
            <h1>Fetch</h1>
            {/* this button will fetch the pokemons */}
            <button onClick={getPokes}>Fetch</button>
            <ul>
                {pokes.map(poke => (
                    <li key={poke.name}>{poke.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch