import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./grid.css";
import axios from "axios";
import homeStyles from "./../styles.css"
import SafeImage from "../components/SafeImage"

export default class Grid extends Component {
	static propTypes = {
		cdn: PropTypes.string,
		s3: PropTypes.object,
		server: PropTypes.string,
		select: PropTypes.func,
		containerStyles: PropTypes.object,
		showDimensions: PropTypes.bool
	};

	constructor(props) {
		super(props);
		this.state = {
			disableCache: true,
			imageSelectedIndex: undefined,
			loading: false
		};
		this.searchInputEle = React.createRef();
		this.search = this.search.bind(this);
		this.inputChange = this.inputChange.bind(this)
	}

	componentDidUpdate(prevProps){
		if(this.props.defaultSearch && (prevProps.defaultSearch != this.props.defaultSearch)){
			if(window && this.props.s3.path){
				if(!window.react_S3_Gallery || !window.react_S3_Gallery[this.props.s3.path])
					this.search();
				else this.updateGlobalDataLocally(window.react_S3_Gallery[this.props.s3.path])
			}
		}
	}

	updateGlobalDataLocally(images){
		this.setState({
			isGrid: true,
			disableCache: false,
			loading: false
		});

		this.props.setImages(images)

		if(!window.react_S3_Gallery)
			window.react_S3_Gallery = {}
		window.react_S3_Gallery[this.props.s3.path] = images
	}

	inputChange(e){
		if (e && e.key !== "Enter") return;
		let query = (event && event.target.value);
		this.search(query)
	}

	reset(){
		this.setState({
			imageSelectedIndex: undefined
		})
		this.updateGlobalDataLocally([]);
		this.searchInputEle.current.value = '';
	}

	search(query) {
		query = query || '__getDefaultImgs__'
		this.setState({loading: true})
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

				this.updateGlobalDataLocally(images)
			})
			.catch((error) => {
				this.setState({
					images: [],
					isGrid: true,
					loading: false
				});
			})
	}

	openPreview = (url) => () => {
		window.open(url, '_blank')
	}

	selectionBar(){
		if(this.state.imageSelectedIndex == undefined) return null
		let imageSlug = this.props.images[this.state.imageSelectedIndex].slug
		let url = this.props.images[this.state.imageSelectedIndex].url
		return(
			<div className={ styles.selectionBar}>
				<span>{imageSlug}</span>
				<span className={styles.selectionBarButtons}>
					<button className={`${homeStyles.galleryButton} ${styles.previewButton}`} onClick={this.openPreview(url)}>Preview</button>
					<button className={`${homeStyles.galleryButton} ${styles.selectionButton}`} onClick={()=>this.props.select(imageSlug)}>SELECT</button>
				</span>
			</div>
		)
	}
	render() {
		return (
			<div style={this.props.containerStyles}>
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
						className={`${homeStyles.galleryInput} ${styles.searchBar}`}
						onKeyUp={(this.inputChange)}
						ref={this.searchInputEle}
					/>
					<button onClick={()=>this.reset()} className={`${homeStyles.galleryButton} ${styles.searchButton}`} style={{backgroundColor: '#2d599c'}}>Reset</button>
					<button onClick={()=>this.search(this.searchInputEle.current.value)} className={`${homeStyles.galleryButton} ${styles.searchButton}`}>Search</button>
				</div>
				{this.props.showDimensions && <p style={{ fontSize: 12, marginLeft: 20, opacity: 0.6 }}>Dimensions mentioned as width x height in pixels.</p>}
				<div className={styles.grid}>
					{!this.state.loading && this.props.images && this.props.images.length ? (
						this.props.images.map((image,i) => {
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

									{this.state.imageSelectedIndex == i && <div className={ styles.gridOverlay }></div>}
									<SafeImage
										alt={ image.url }
										className={ styles.gridImage }
										src={ image.url }
										showDimensions={this.props.showDimensions}
									/>
									<div className={ styles.gridFooter }>{image.slug}</div>
								</div>
							);
						})
					) : (
						<div className={styles.info}>
							{this.state.loading?<div className={homeStyles.galleryLoading}></div>:<span>No files. Try searching for something.</span>}
						</div>
					)}
				</div>
				{this.selectionBar()}
			</div>
		);
	}
}
