import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

import Grid from "./Grid/grid";
import Uploader from "./Uploader/uploader";

export default class Gallery extends Component {
	static propTypes = {
		config: PropTypes.object,
		isActive: PropTypes.bool,
		uploaded: PropTypes.func
	};

	static defaultProps = {
		config: {},
		isActive: false,
	};

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			isGrid: true,
			style: {
				...props.config.style,
				width: this.props.config.style.width || 30,
				align: `flex-${props.config.style.align || "right"}`,
			},
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
				width: 0,
			},
		});
		setTimeout(() => this.props.onClose(data), 200);
	};

	spriteNote() {
		const SPRITE_PATH = "sprites/images";
		if (this.props.config.s3.path == SPRITE_PATH) {
			return (
				<span className={styles.note}>
					Note: Image slug you select would be reflected only after
					save.
				</span>
			);
		}
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
						Image Gallery
					</div>

					<ul className={styles.navList}>
						<li>
							<div
								onClick={() =>
									this.setState({
										isGrid: !this.state.isGrid
									})
								}
								className={
									styles.navItem +
									" " +
									(this.state.isGrid
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
										isGrid: !this.state.isGrid
									})
								}
								className={
									styles.navItem +
									" " +
									(!this.state.isGrid
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
				{this.spriteNote()}
				{this.state.isGrid ? (
					<Grid
						{...this.props.config}
						defaultSearch={this.props.isActive}
						select={this.selectFinal}
					/>
				) : (
					<Uploader
						{...this.props.config}
						select={this.selectFinal}
					/>
				)}
			</div>
		);
	}
}
