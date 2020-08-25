import React, { Component } from "react"
import CustomHeader from "../header";

export interface IImageProps {
    url: string,
    height?: number,
    width?: number
}

export default class ImageComponent extends Component < IImageProps > {
    alternativeImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";
    
    render() {
        if (!this.props.url) return <CustomHeader text="No Image Availble" />
        return <img src={this.props.url || this.alternativeImage} height={this.props.height} width={this.props.width} />
    }
}
