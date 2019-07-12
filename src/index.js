import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import Grid from "./Grid/grid";
import Uploader from "./Uploader/uploader";

export default class Gallery extends Component {
	static propTypes = {
		config: PropTypes.object,
		uploaded: PropTypes.func
	};

	static defaultProps = {
		config: {
			size: "small"
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			isGrid: true,
			style: {
				...props.config.style,
				width: this.props.config.style.width || 30,
				align: `flex-${props.config.style.align || "right"}`
			}
		};
	}

	selectFinal = slug => {
		let data;
		if (slug) {
			data = {
				imageUrl: `${this.props.config.cdn}/${slug}`,
				imageSlug: slug.substr(0, slug.lastIndexOf(".")) || slug
			};
		}
		this.setState({
			isGrid: true,
			style: {
				...this.state.style,
				width: 0
			}
		});
		setTimeout(() => this.props.onClose(data), 1000);
	};

	spriteNote() {
		const SPRITE_PATH = "sprites/images";
		if (this.props.config.s3.path == SPRITE_PATH) {
			return <span className={styles.note}>Note: Image slug you select would be reflected only after save.</span>;
		}
	}

	render() {
		return (
			<div className={styles.wrapper} style={{ justifyContent: this.state.style.align }}>
				<div className={styles.overlay} onClick={() => this.selectFinal()} />
				<div className={styles.modal} style={{ width: this.state.style.width + "%" }}>
					<div className={styles.header}>
						<span>Image Gallery</span>
						<div className={styles.newUpload} onClick={() => this.setState({ isGrid: !this.state.isGrid })}>
							{this.state.isGrid ? "Upload New" : "Search Image"}
						</div>
					</div>
					{this.spriteNote()}
					{this.state.isGrid ? <Grid {...this.props.config} select={this.selectFinal} /> : <Uploader {...this.props.config} select={this.selectFinal} />}
				</div>
			</div>
		);
	}
}
