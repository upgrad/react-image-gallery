# awesome-react-gallery

> Gallery component for S3 image directory

[![NPM](https://img.shields.io/npm/v/awesome-react-gallery.svg)](https://www.npmjs.com/package/awesome-react-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save awesome-react-gallery
```

## Usage

```jsx
import React, { Component } from "react";
import Gallery from "awesome-react-gallery";

class Example extends Component {
  constructor() {
    this.state = {
      showGallery: true
    };
    this.config = {
      size: "medium",
      server: "http://localhost:3000/gallery",
      style: {
        width: 60,
        align: "left"
	  },
	  s3: {
			bucket: "xxxx-xxxx-xxxx",
			path: "XXXXX/XXXX/XXXXX"
	  },
	  cdn: "XXXXX/XXXX/XXXXX"
  }

  onImageReceive = data => {
    this.setState({
      ...this.state,
      showGallery: false,
      image: data.imageUrl
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.image} />
        {this.state.showGallery ? (
          <Gallery onClose={this.onImageReceive} config={this.config} />
        ) : null}
      </div>
    );
  }
}
```

## Config

`server` is the url for the server APIs.\
`s3.bucket` is the bucket name from which images are to be rendered by awesome gallery.\
`s3.path` is the path in the bucket from which the images are to be fetched and rendered.\
`cdn` is the path to the cdn which needs to suffixed along with the image that gets selected.\
`style` is a object which contains normal UI options like width and alignment of gallery component.\

## License

MIT © [upgrad](https://github.com/upgrad)
