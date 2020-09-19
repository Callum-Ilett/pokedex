import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Header from './Header';
import Pokemon from './Pokemon';

function App() {
	
	const [pokemons, setPokemon] = useState([]);

	useEffect(() => {
		const fetchData = async() => {
			let response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150");
			let allPokemon = response.data.results;

			let pokemonData = await Promise.all(
				allPokemon.map(async (pokemon) => {
					let pokemonResponse = await axios.get(pokemon.url);
					const { id, name, types } = pokemonResponse.data;

					let currentPokemon = {
						id,
						name,
						image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
						type: types[0].type.name
					}

					return currentPokemon
				})
			);

			setPokemon(pokemonData);
		}

		fetchData()
	}, [])

	return (
		<div className="App">
			<Header />
			<div className="pokemon-list">
				{
					pokemons.map(pokemon => {
						return <Pokemon
							key={pokemon.id}
							id={pokemon.id}
							name={pokemon.name}
							url={pokemon.image}
							type={pokemon.type}
						/>
					})
				}
			</div>
		</div>
	);
}

export default App;
