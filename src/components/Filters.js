import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {

	const { placeholderText, getUserInput } = props;

	return (
		<div className="filters">
			<input placeholder={placeholderText} type="text" className="userInput" onChange={getUserInput}/>
		</div>
  );

};

Filters.propTypes = {
	placeholderText: PropTypes.string.isRequired,
	getUserInput: PropTypes.func.isRequired
};

export default Filters;