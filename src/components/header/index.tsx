import React, { Component } from "react";
import ErrorComponent from "../error";


interface IPropsCustomeHeader {
    text: string,
    style?: any
}

export default class CustomHeader extends Component < IPropsCustomeHeader > {

    render () {
        if (!this.props.text) return <ErrorComponent />
        return (
        <div className={"jumbotron py-3"}>
            <h1 style={this.props.style}> {this.props.text} </h1>
        </div>
        )
    }
}