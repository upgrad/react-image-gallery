# react-image-gallery

> Gallery component for S3 image directory

[![NPM](https://img.shields.io/npm/v/react-image-gallery.svg)](https://www.npmjs.com/package/react-image-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-gallery
```

## Usage

```jsx
import React, { Component } from "react";
import Gallery from "react-image-gallery";

class Example extends Component {
  constructor() {
    this.state = {
      showGallery: true
    };
    this.config = {
      size: "small",
      server: "http://localhost:7000/gallery",
      style: {
        width: 60,
        align: "left"
      }
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

## License

MIT © [upgrad](https://github.com/upgrad)
