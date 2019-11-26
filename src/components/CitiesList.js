import React from 'react';
import mountain from '../images/mountain.png';
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
				<input type="checkbox" className="checkItems" onClick={getAllSelected} checked={allSelected === true}/>
				<p className="items">{filteredCities.length} items</p>
			</div>
			<ul className="cities-list">
				{filteredCities
					.map(city => {
						return (
							<li className="cities-item" key={city.id} >
								<input type="checkbox" className="myCheck" onClick={getSelected} value={city.id} checked={selected.filter(item => (item.name === city.name)).length === 1}/>
								<img src={mountain} alt="mountain" className="logo" />
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
	userInput: PropTypes.string.isRequired
};

export default CitiesList;