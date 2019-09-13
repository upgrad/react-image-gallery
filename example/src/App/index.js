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

	showGallery = () => {
		this.setState({gallery: true})
	}

	render() {
		return (
			<div>
				<div className="bg" >
					<h1>React Image Gallery</h1>
					<p>A simple s3 based gallery component for react. To see the demo in action, press the button below.</p>
					<button className="button" onClick={this.showGallery} >UPLOAD</button>
					{this.state.image && (
						<img
							alt="S3 Image"
							src={this.state.image}
							className="s3image"
						/>
					)}
				</div>
				<Gallery
					isActive={this.state.gallery}
					onClose={this.onImageReceive}
					config={this.config}
				/>
			</div>
		);
	}
}
