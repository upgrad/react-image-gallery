import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./uploader.css";
import axios from "axios";
import homeStyles from "./../styles.css"
import { validate } from "./../helpers/validators"

export default class Uploader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {},
			errors: null,
			titleValid: true
		};
	}

	static propTypes = {
		s3: PropTypes.object,
		server: PropTypes.string,
		select: PropTypes.func,
		containerStyles: PropTypes.object,
		restrictions: PropTypes.object,
		accept: PropTypes.string
	}

	drop = e => {
		e.stopPropagation();
		e.preventDefault();
		let file = e.dataTransfer.files && e.dataTransfer.files[0]
		if(file)
			this.setState({
				imagePreviewSrc: URL.createObjectURL(file),
				form: {
					...this.state.form,
					file
				}
			});
		return false;
	};

	fileChangeListener = e => {
		let files = e.target.files
		if(files && files[0]) {
			validate(files[0], this.props.restrictions).then(() => {
				this.setState({
					imagePreviewSrc: files && files[0] && URL.createObjectURL(files[0]),
					form: {
						...this.state.form,
						file: files[0]
					},
					errors: null
				});
			}).catch(errors => {
				this.setState({
					errors
				})
			})
		}
	};

	titleChangeListener = e => {
		if(!/[^\w\d-]/.test(e.target.value)) {
			this.setState({
				form: {
					...this.state.form,
					title: e.target.value
				},
				titleValid: true
			});
		} else {
			this.setState({ titleValid: false })
		}
	}

	clearImage = () => {
		this.setState({
			imagePreviewSrc:undefined,
			form: {
				...this.state.form,
				file: undefined
			}
		});
	}

	upload = e => {
		this.setState({ loading: true });
		e.preventDefault();
		let formData = new FormData();
		formData.append("title", this.state.form.title);
		formData.append("file", this.state.form.file);
		formData.append("s3Bucket", this.props.s3.bucket);
		formData.append("s3Path", this.props.s3.path);
		axios({
			method: "post",
			url: `${this.props.server}/upload`,
			data: formData,
			config: { headers: { "Content-Type": "multipart/form-data" } }
		})
			.then(response => {
				this.props.select(response.data.slug);
			})
			.catch(function(error) {
				alert(`Sorry couldn't upload the image. Try again`)
			});
	};

	dragOver(event) {
		event.stopPropagation();
		event.preventDefault();
		return false;
	}

	render() {
		return (
			<div className={styles.uploader} style={this.props.containerStyles}>
				<form>
					<div className={styles.imagePreview}>
						{this.state.form.file && <span className={styles.clearImage} onClick={this.clearImage}>clear[x]</span>}
						<img src={this.state.imagePreviewSrc} style={{width:'100%'}}></img>
					</div>
					{!this.state.form.file &&
						<div>
						<label
							onDrop={this.drop}
							onDragOver={this.dragOver}
							htmlFor="upload-file"
							className={styles.fileUploader}
						>
							<span className={styles.info}>
								Drop an image here or <a>choose a image</a>
							</span>
						</label>
						<input
							id="upload-file"
							encType="multipart/form-data"
							onChange={this.fileChangeListener}
							name="file"
							className={styles.hide}
							type="file"
							accept={this.props.accept}
						/>
					</div>}
					<label className={styles.titleLabel}>
						Image Tag{`*`}
					</label>
					<input
						onChange={this.titleChangeListener}
						name="title"
						className={`${homeStyles.galleryInput} ${styles.title} ${!this.state.titleValid ? styles.error : ''}`}
						type="text"
						placeholder="example, adidas_white_logo"
					/>
					<button
						className={`${homeStyles.galleryButton} ${styles.submit}`}
						onClick={this.upload}
						disabled={!this.state.form.file || !this.state.form.title || this.state.errors || !this.state.titleValid}
					>
						{this.state.loading
							? "Uploading Image ..."
							: "UPLOAD"}
					</button>
					{this.state.errors && Array.isArray(this.state.errors) &&
						<div className={styles.errors}>{this.state.errors.map(e =>
							<p className={styles.errorMessage}>{e}</p>
						)}</div>}
				</form>
			</div>
		);
	}
}
