import React, { useState, Component } from "react"
import { StarFill } from 'react-bootstrap-icons';


interface IProps {
    stars: number,
    paintStarOption?: boolean
}

enum StarColors {
    primary = "red",
    secondary = "blue"
}

export default class Rank extends Component < IProps, any > {

    constructor(props: IProps) {
        super(props)
        this.state = {
            starColor: StarColors.primary
        }
    }

    changeStartsColor() {
        if(!this.props.paintStarOption) return;
        const color = this.state.starColor === StarColors.primary ? StarColors.secondary : StarColors.primary
        this.setState({
            starColor: color
        })
    }

    numberOfStars = new Array(this.props.stars).fill(true, 0)
    render() {
        return (
        <div>
            {this.numberOfStars.map((_, index) => <StarFill key={index} fill={this.state.starColor} onClick={this.changeStartsColor.bind(this)} />)}
        </div>
        )
    }
}