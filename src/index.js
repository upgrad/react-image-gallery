import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

import Grid from "./Grid/grid";
import Uploader from "./Uploader/uploader";

export default class Gallery extends Component {
	static propTypes = {
		config: PropTypes.object,
		isActive: PropTypes.bool,
		uploaded: PropTypes.func,
		uploaderConfig: PropTypes.object,
		showDimensions: PropTypes.bool
	};

	static defaultProps = {
		config: {},
		isActive: false,
		uploaderConfig: {
			accept: '.png, .jpg, .jpeg'
		},
		showDimensions: false
	};

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			tab: 'grid',
			style: {
				...props.config.style,
				width: this.props.config.style.width || 30,
				align: `flex-${props.config.style.align || "right"}`
			},
		};
	}

	selectFinal = slug => {
		let data;
		if (slug) {
			data = {
				imageUrl: `${this.props.config.cdn}/${slug}`,
				imageSlug: slug.substr(0, slug.lastIndexOf(".")) || slug,
				filename: slug
			};
		}
		this.setState({
			tab: 'grid',
			style: {
				...this.state.style,
				width: 0,
			},
		});
		setTimeout(() => this.props.onClose(data), 200);
	};

	setImages = (images) => {
		this.setState({ images })
	}

	render() {
		return (
			<div
				className={
					styles.modal +
					" " +
					(this.props.isActive
						? styles.isModalActive
						: "")
				}
			>
				<div className={styles.header}>
					<div className={styles.title}>
						Gallery
					</div>

					<ul className={styles.navList}>
						<li>
							<div
								onClick={() =>
									this.setState({
										tab: 'grid'
									})
								}
								className={
									styles.navItem +
									" " +
									(this.state.tab === 'grid'
										? styles.navItemActive
										: "")
								}
							>
								Search
							</div>
						</li>
						<li>
							<div
								onClick={() =>
									this.setState({
										tab: 'upload'
									})
								}
								className={
									styles.navItem +
									" " +
									(this.state.tab === 'upload'
										? styles.navItemActive
										: "")
								}
							>
								Upload New
							</div>
						</li>
					</ul>
					<div
						className={styles.closeBtn}
						onClick={() => this.selectFinal()}
					>
						<svg
							fill="none"
							preserveAspectRatio="xMidYMid meet"
							height="20"
							width="20"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M15.8334 5.34175L14.6584 4.16675L10 8.82508L5.34169 4.16675L4.16669 5.34175L8.82502 10.0001L4.16669 14.6584L5.34169 15.8334L10 11.1751L14.6584 15.8334L15.8334 14.6584L11.175 10.0001L15.8334 5.34175Z"
								fill="#B4B7BC"
							/>
						</svg>
					</div>
				</div>
				<Grid
					containerStyles={{ display: this.state.tab === 'grid' ? '' : 'none' }}
					{...this.props.config}
					defaultSearch={this.props.isActive}
					select={this.selectFinal}
					images={this.state.images}
					setImages={this.setImages}
					showDimensions={this.props.showDimensions}
				/>
				<Uploader
					containerStyles={{ display: this.state.tab === 'upload' ? '' : 'none' }}
					{...this.props.config}
					select={this.selectFinal}
					restrictions={{
						size: 5 * 1000 * 1000,
						...this.props.config.uploadRestrictions
					}}
					accept={this.props.uploaderConfig.accept}
				/>
			</div>
		);
	}
}
