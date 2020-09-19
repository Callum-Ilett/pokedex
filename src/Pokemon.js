import React from 'react';

import './Pokemon.css';

function Pokemon({ id, name, url, type }) {
	const colors = {
		fire: '#FDDFDF',
		grass: '#DEFDE0',
		electric: '#FCF7DE',
		water: '#DEF3FD',
		ground: '#f4e7da',
		rock: '#d5d5d4',
		fairy: '#fceaff',
		poison: '#98d7a5',
		bug: '#f8d5a3',
		dragon: '#97b3e6',
		psychic: '#eaeda1',
		flying: '#F5F5F5',
		fighting: '#E6E0D4',
		normal: '#F5F5F5'
	};
	
	const color = colors[type];

	return (
		<div className="pokemon" style={{ backgroundColor: color }}>
			<div className="pokemon__image">
				<img src={url} alt={name} />
			</div>
			<div className="pokemon__info">
				<span className="number">
					{`#${id.toString().padStart(3, '0')}`}
				</span>
				<h3 className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
				<small className="type">Type: <span>{type}</span></small>
			</div>
		</div>
	)
}

export default Pokemon