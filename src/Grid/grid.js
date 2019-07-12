import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./grid.css";
import axios from "axios";

export default class Grid extends Component {
	static propTypes = {
		cdn: PropTypes.string,
		s3: PropTypes.object,
		server: PropTypes.string,
		select: PropTypes.func
	};

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			disableCache: true
		};
		this.search = this.search.bind(this);
	}

	search(event) {
		if (event.key !== "Enter") return;
		let query = event.target.value;
		axios
			.post(`${this.props.server}/search/${query}?disableCache=${this.state.disableCache}`, {
				s3Bucket: this.props.s3.bucket,
				s3Path: this.props.s3.path
			})
			.then(response => {
				let images = response.data.map(image => {
					image.url = `${this.props.cdn}/${image.slug}`;
					return image;
				});

				this.setState({
					images,
					isGrid: true,
					disableCache: false
				});
			})
			.catch(function(error) {
				this.setState({
					images: [],
					isGrid: true
				});
			})
			.finally(function() {});
	}

	render() {
		return (
			<div>
				<div>
					<input placeholder="Search for an existing image" className={styles.searchBar} onKeyUp={this.search} />
				</div>
				<div className={styles.grid}>
					{this.state.images && this.state.images.length ? (
						this.state.images.map(image => {
							return (
								<div key={image.slug} className={styles.gridImageWrapper} onClick={() => this.props.select(image.slug)}>
									<img alt={image.url} className={styles.gridImage} src={image.url} />
								</div>
							);
						})
					) : (
						<span>No images found</span>
					)}
				</div>
			</div>
		);
	}
}
