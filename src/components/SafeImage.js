import React from 'react';
import defaultIcon from './defaultIcon.png';
import PropTypes from 'prop-types';

export default class SafeImage extends React.Component {
	static propTypes = {
		src: PropTypes.string,
		alt: PropTypes.string,
		className: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			url: props.src || defaultIcon
		}
	}

	onError = () => {
		this.setState({
			url: defaultIcon
		});
	}

	render() {
		return (
			<img
				alt={this.props.alt}
				src={this.state.url}
				onError={this.onError}
				className={this.props.className}
			/>
		)
	}
}
