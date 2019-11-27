import React from 'react';
import '../styles/SelItems.scss'
import PropTypes from 'prop-types';

const SelItems = props => {
	const { selected, clearAllSelected } = props;
	return (
		<div className="selItems">
			<p className="items">{selected.length} items</p>
			<button className="clear" onClick={clearAllSelected}>clear</button>
		</div>
	);

};

SelItems.propTypes = {
	selected: PropTypes.arrayOf(PropTypes.object).isRequired,
	clearAllSelected: PropTypes.func.isRequired
};

export default SelItems;