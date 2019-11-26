import React from 'react';
import mountain from '../images/mountain.png';
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
								<img src={mountain} alt="mountain" className="logo" />
								<div className="names">
									<p className="city-name">{city.name}</p>
									<p className="chinese-name">{city.chineseName}</p>
								</div>
								<div className="closed">
									<button data-id={city.id} className="btn-clear" onClick={closeSelected}>X</button>
								</div>
							</li>
						);
					})
				}
			</ul>
		</div>
	);

};

/* SelList.propTypes = {
};
 */
export default SelList;