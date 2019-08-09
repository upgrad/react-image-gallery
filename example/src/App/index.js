import React, { Component } from "react";
import Gallery from "awesome-react-gallery";
import "./index.css";

const CDN_URL = `https://ik.imagekit.io/upgrad1/marketing-platform-assets`;
const S3_PATH = `sprites/images`;
const S3_BUCKET = `upgrad-marketing-platform`;
const SERVER_URL = `https://dev-mp.upgrad.com:7000/gallery`;

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
			cdn: CDN_URL + "/" + S3_PATH
		};
		this.onImageReceive = this.onImageReceive.bind(this);
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
				<img
					alt="Sample Image background"
					src="https://sample-videos.com/img/Sample-jpg-image-2mb.jpg"
					className="imageStyle"
				/>
				{this.state.image ? (
					<img
						alt="S3 Image"
						src={this.state.image}
						className="s3image"
					/>
				) : null}
				<Gallery
					isActive={this.state.gallery}
					onClose={this.onImageReceive}
					config={this.config}
				/>
			</div>
		);
	}
}
