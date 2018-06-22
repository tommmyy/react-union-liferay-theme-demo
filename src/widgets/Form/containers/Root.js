import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectReducers } from 'redux-extensible-store';

import reducers from '../reducers';
import SyncValidationForm from './SyncValidationForm';


class Root extends Component {
	static propTypes = {
		injectReducers: PropTypes.func,
		namespace: PropTypes.string,
	};

	componentWillMount() {
		this.props.injectReducers(reducers);
	}

	handleSubmit = (data) => {
		console.log(data);
	};

	render() {
		// return <SyncValidationForm form={'form'} onSubmit={this.handleSubmit} />;
		return <SyncValidationForm form={`form-${ this.props.namespace}`} onSubmit={this.handleSubmit} />;
	}
}

export default connect(undefined, {
	injectReducers,
})(Root);
