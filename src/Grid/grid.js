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
			disableCache: true,
			imageSelectedIndex: undefined
		};
		this.search = this.search.bind(this);
	}

	componentDidMount() {
		this.search();
	}

	search(event) {
		if (event && event.key !== "Enter") return;
		let query = (event && event.target.value) || '__getDefaultImgs__';
		axios
			.post(
				`${this.props.server}/search/${query}?disableCache=${
					this.state.disableCache
				}`,
				{
					s3Bucket: this.props.s3.bucket,
					s3Path: this.props.s3.path
				}
			)
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

	selectionBar(){
		if(this.state.imageSelectedIndex == undefined) return null
		let imageSlug = this.state.images[this.state.imageSelectedIndex].slug
		return(
			<div className={ styles.selectionBar}>
				<span>{imageSlug}</span>
				<button className={styles.selectionButton} onClick={()=>this.props.select(imageSlug)}>SELECT</button>
			</div>
		)
	}
	render() {
		return (
			<div>
				<div className={styles.searchWrapper}>
					<svg
						fill="none"
						preserveAspectRatio="xMidYMid meet"
						height="20"
						width="20"
						className={styles.searchIcon}
					>
						<path
							d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
							fill="#90A0B7"
						/>
					</svg>
					<input
						placeholder="Search for an existing image"
						className={styles.searchBar}
						onKeyUp={this.search}
					/>
				</div>
				<div className={styles.grid}>
					{this.state.images && this.state.images.length ? (
						this.state.images.map((image,i) => {
							return (
								<div
									key={image.slug}
									style={{borderColor:`${this.state.imageSelectedIndex == i?'#ec454d':'#e5e5e5'}`}}
									className={
										`${styles.gridImageWrapper}
										 ${/white/.test(image.url) ? styles.gridImageDarkWrapper : ''}`
									}
									onClick={() => this.setState({imageSelectedIndex: i})}
								>
									<img
										alt={	image.url }
										className={ styles.gridImage }
										src={ image.url }
									/>
								</div>
							);
						})
					) : (
						<span>No images found</span>
					)}
				</div>
				{this.selectionBar()}
			</div>
		);
	}
}
