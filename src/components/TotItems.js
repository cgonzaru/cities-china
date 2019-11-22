import React from 'react';
import '../styles/TotItems.scss';
import PropTypes from 'prop-types';

const TotItems = props => {

	return (
		<div className="totItems">
			<input type="checkbox" className="checkItems"/>
			<p className="items">items</p>
		</div>
	);

};

/* TotItems.propTypes = {
};
 */
export default TotItems;