import React from 'react';
import '../styles/TotItems.scss';
import PropTypes from 'prop-types';

const TotItems = props => {
	const { selected } = props;
	return (
		<div className="totItems">
			<input type="checkbox" className="checkItems"/>
			<p className="items">{selected.length} items</p>
		</div>
	);

};

/* TotItems.propTypes = {
};
 */
export default TotItems;