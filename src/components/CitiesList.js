import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = props => {

	const { cities, userInput } = props;
	return (
		<ul className="cities-list">
			{cities
				.filter(city => city.name.toUpperCase().includes(userInput.toUpperCase()))
				.map((city, index) => {
					return (
						<li className="cities-item" key={index}>
							<p className="city-name">{city.name}</p>
							<p className="chinese-name">{city.chineseName}</p>
						</li>
					);
				})
			}
		</ul>
	);

};

CitiesList.propTypes = {
	userInput: PropTypes.string.isRequired
};

export default CitiesList;