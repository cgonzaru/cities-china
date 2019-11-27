import React from 'react';
import mountains from '../images/mountains.png';
import '../styles/CitiesList.scss';
import PropTypes from 'prop-types';

const CitiesList = props => {

	const { cities, userInput, getSelected, allSelected, selected, getAllSelected } = props;
	
	const filteredCities = cities
		.filter(city => {
			return city.name.toUpperCase().includes(userInput.toUpperCase())
		});

	return (
		<div className="containerList">
			<div className="totItems">
				<input type="checkbox" className="checkItems" onChange={getAllSelected} checked={allSelected === true} />
				<p className="items">{filteredCities.length} items</p>
			</div>
			<ul className="cities-list">
				{filteredCities
					.map(city => {
						return (
							<li className="cities-item cities-hover" key={city.id} >
								<input type="checkbox" className="myCheck" onChange={getSelected} value={city.id} checked={selected.filter(item => (item.name === city.name)).length === 1} />
								<img src={mountains} alt="mountains" className="logo" />
								<div className="names">
									<p className="city-name">{city.name}</p>
									<p className="chinese-name">{city.chineseName}</p>
								</div>
							</li>
						);
					})
				}
			</ul>
		</div>
	);

};

CitiesList.propTypes = {
	userInput: PropTypes.string.isRequired,
	cities: PropTypes.arrayOf(PropTypes.object).isRequired,
	getSelected: PropTypes.func.isRequired,
	allSelected: PropTypes.bool,
	selected: PropTypes.arrayOf(PropTypes.object).isRequired,
	getAllSelected: PropTypes.func.isRequired
};

export default CitiesList;