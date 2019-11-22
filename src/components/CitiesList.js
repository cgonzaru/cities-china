import React from 'react';
import mountain from '../images/mountain.png';
import '../styles/CitiesList.scss';
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
							<input type="checkbox" className="myCheck"/>
							<img src={mountain} alt="mountain" className="logo"/>
							<div className="names">
								<p className="city-name">{city.name}</p>
								<p className="chinese-name">{city.chineseName}</p>
							</div>
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