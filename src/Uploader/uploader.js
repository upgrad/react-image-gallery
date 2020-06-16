import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./uploader.css";
import axios from "axios";
import homeStyles from "./../styles.css"
import { validate } from "./../helpers/validators"
import SafeImage from "../components/SafeImage";

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

	fileChangeListener = e => {
		let files = e.target.files
		if(files && files[0]) {
			this.setFile(files[0])
		}
	};

	setFile = file => {
		this.setState({
			imagePreviewSrc: this.getFilePreviewUrl(file),
			form: {
				...this.state.form,
				file
			},
			errors: null
		})
	}

	getFilePreviewUrl = file => {
		return file.type && file.type.startsWith('image/') ? URL.createObjectURL(file) : null
	}

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
			imagePreviewSrc: null,
			form: {
				...this.state.form,
				file: null
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
				alert(`Sorry couldn't upload the file. Try again`)
			}).finally(() => {
				this.setState({ loading: false })
			});
	};

	render() {
		return (
			<div className={styles.uploader} style={this.props.containerStyles}>
				<form>
					{this.state.form.file &&
						<div className={styles.imagePreview}>
							<span className={styles.clearImage} onClick={this.clearImage}>clear[x]</span>
							<SafeImage className={styles.previewImage} src={this.state.imagePreviewSrc} />
						</div>
					}
					{!this.state.form.file &&
						<div className={styles.fileUploader}>
						<input
							id="upload-file"
							encType="multipart/form-data"
							onChange={this.fileChangeListener}
							name="file"
							className={styles.fileUploaderInput}
							type="file"
							accept={this.props.accept}
						/>
						<span className={styles.info}>
							Drop a file here or <a>choose one by clicking here</a>
						</span>
					</div>}
					<label className={styles.titleLabel}>
						File Tag{`*`}
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
							? "Uploading..."
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
