import React from 'react';
import '../styles/Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {

	const { placeholderText, getUserInput, clearKey } = props;

	return (
		<div className="filters">
			<i className="fas fa-search form-control"></i>
			<input placeholder={placeholderText} type="text" className="userInput" onChange={getUserInput} onKeyDown={clearKey}/>
		</div>
	);

};

Filters.propTypes = {
	placeholderText: PropTypes.string.isRequired,
	getUserInput: PropTypes.func.isRequired
};

export default Filters;