import React from 'react';
import defaultIcon from './defaultIcon.png';
import PropTypes from 'prop-types';

export default class SafeImage extends React.Component {
	static propTypes = {
		src: PropTypes.string,
		alt: PropTypes.string,
		className: PropTypes.string,
		showDimensions: PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.state = {
			url: props.src || defaultIcon,
			dimensions: '',
			errored: false
		}
	}

	onError = () => {
		this.setState({
			url: defaultIcon,
			errored: true
		});
	}

	onLoad = (e) => {
		this.setState({ dimensions: `${e.target.clientWidth} x ${e.target.clientHeight}` })
	}

	render() {
		return (
			<React.Fragment>
				{this.props.showDimensions && !this.state.errored && <span style={{ position: 'absolute', right: '7%', top: '7%', fontSize: 12, background: 'white', padding: '2px 4px', borderRadius: 4 }}>{this.state.dimensions}</span>}
				<img
					alt={this.props.alt}
					src={this.state.url}
					onError={this.onError}
					className={this.props.className}
					onLoad={this.onLoad}
					loading={'lazy'}
				/>
			</React.Fragment>
		)
	}
}
