import React, { Component } from "react";
import Gallery from "awesome-react-gallery";
import "./index.css";

const CDN_URL = ``;
const S3_PATH = ``;
const S3_BUCKET = ``;
const SERVER_URL = `http://localhost:7000/gallery`;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gallery: false
		};

		this.config = {
			size: "small",
			server: SERVER_URL,
			style: {
				width: 30,
				align: "right"
			},
			s3: {
				bucket: S3_BUCKET,
				path: S3_PATH
			},
			cdn: CDN_URL
		};
	}

	onImageReceive = data => {
		this.setState({
			...this.state,
			gallery: false,
			image: data && data.imageUrl
		});
	};

	render() {
		return (
			<div>
				<button
					className="button"
					onClick={() => {
						this.setState({
							gallery: true
						});
					}}
				>
					UPLOAD
				</button>
				<img alt="Sample Image background" src="https://sample-videos.com/img/Sample-jpg-image-2mb.jpg" className="imageStyle" />
				{this.state.image ? <img alt="S3 Image" src={this.state.image} className="s3image" /> : null}
				{this.state.gallery ? <Gallery onClose={this.onImageReceive} config={this.config} /> : null}
			</div>
		);
	}
}
