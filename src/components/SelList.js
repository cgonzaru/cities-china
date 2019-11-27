import React from 'react';
import mountains from '../images/mountains.png';
import '../styles/SelList.scss';
import PropTypes from 'prop-types';

const SelList = props => {
	const { selected, closeSelected } = props;
	return (
		<div className="selList">
			<ul className="cities-list">
				{selected
					.map(city => {
						return (
							<li className="cities-item" key={city.id} >
								<img src={mountains} alt="mountains" className="logo" />
								<div className="names">
									<p className="city-name">{city.name}</p>
									<p className="chinese-name">{city.chineseName}</p>
								</div>
								<button data-id={city.id} className="btn-clear" onClick={closeSelected}>X</button>
							</li>
						);
					})
				}
			</ul>
		</div>
	);

};

SelList.propTypes = {
	selected: PropTypes.arrayOf(PropTypes.object).isRequired,
	closeSelected: PropTypes.func.isRequired
};

export default SelList;