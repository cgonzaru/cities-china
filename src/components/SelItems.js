import React from 'react';
import '../styles/SelItems.scss'
import PropTypes from 'prop-types';

const SelItems = props => {
	const { selected } = props;
	return (
		<div className="selItems">
			<p className="items">{selected.length} items</p>
			<span className="clear">clear</span>
		</div>
	);

};

/* SelItems.propTypes = {
};
 */
export default SelItems;