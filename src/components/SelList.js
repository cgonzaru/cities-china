import React from 'react';
import mountain from '../images/mountain.png';
import PropTypes from 'prop-types';

const SelList = props => {
	const { selected } = props;
	console.log(selected)
	return (
		<div className="selList">
			<ul className="cities-list">
				{selected
					.map((city, index) => {
						return (
							<li className="cities-item" key={index} >
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

/* SelList.propTypes = {
};
 */
export default SelList;