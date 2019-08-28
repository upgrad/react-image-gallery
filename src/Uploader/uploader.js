import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./uploader.css";
import axios from "axios";
import homeStyles from "./../styles.css"

export default class Uploader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {}
		};
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

	changeListener = e => {
		this.setState({
			imagePreviewSrc: URL.createObjectURL(e.target.files[0]),
			form: {
				...this.state.form,
				[e.target.name]: (e.target.files && e.target.files[0]) || e.target.value
			}
		});
	};

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
			<div className={styles.uploader}>
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
							onChange={this.changeListener}
							name="file"
							className={styles.hide}
							type="file"
							accept=".png, .jpg, .jpeg"
						/>
					</div>}
					<label className={styles.titleLabel}>
						Image Tag
					</label>
					<input
						onChange={this.changeListener}
						name="title"
						className={`${homeStyles.galleryInput} ${styles.title}`}
						type="text"
						placeholder="example, adidas_white_logo"
					/>
					<button
						className={`${homeStyles.galleryButton} ${styles.submit}`}
						onClick={this.upload}
					>
						{this.state.loading
							? "Uploading Image ..."
							: "SUBMIT"}
					</button>
				</form>
			</div>
		);
	}
}
