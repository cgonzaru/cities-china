import React from 'react';
import '../styles/SelItems.scss'
import PropTypes from 'prop-types';

const SelItems = props => {
	const { selected } = props;
	return (
		<div className="selItems">
			<p className="items">{selected.length} items</p>
		</div>
	);

};

/* SelItems.propTypes = {
};
 */
export default SelItems;