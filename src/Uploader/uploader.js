import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./uploader.css";
import axios from "axios";

export default class Uploader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {}
		};
	}

	changeListener = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: (e.target.files && e.target.files[0]) || e.target.value
			}
		});
	};

	upload = e => {
		this.setState({ loading: true });
		e.preventDefault();
		let formData = new FormData();
		formData.append("title", this.state.form.title);
		formData.append("size", this.props.size);
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

	drop = event => {
		event.stopPropagation();
		event.preventDefault();
		if (event.dataTransfer.files && event.dataTransfer.files[0]) this.state.form.file = event.dataTransfer.files[0];
		return false;
	};

	dragOver(event) {
		event.stopPropagation();
		event.preventDefault();
		return false;
	}

	render() {
		return (
			<div className={styles.uploader}>
				<h1 className={styles.heading}>Upload a new Image</h1>
				<form>
					<label className={styles.titleLabel}>Image Tag</label>
					<input onChange={this.changeListener} name="title" className={styles.title} type="text" placeholder="upgrad_logo" />
					<label onDrop={this.drop} onDragOver={this.dragOver} htmlFor="upload-file" className={styles.fileUploader}>
						<span className={styles.info}>
							Drop an image here or <a>choose a image</a>
						</span>
					</label>
					<input id="upload-file" encType="multipart/form-data" onChange={this.changeListener} name="file" className={styles.hide} type="file" />
					<button className={styles.submit} onClick={this.upload}>
						{this.state.loading?'Uploading Image ...':'SUBMIT'}
					</button>
				</form>
			</div>
		);
	}
}
