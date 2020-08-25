import React, { Component } from "react"
import styles from "./style.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Trash2 } from 'react-bootstrap-icons';
import Rank from "../rank";

export interface IMovie {
    title: string
    poster: string
    year: string,
    type: string,
    rate: number,
    id: string,
    baseAdditionalInfoUrl: string,
    deleteMovie: Function
}

export default class Movie extends Component < IMovie > {

    showLink = isValidUrl(this.props.baseAdditionalInfoUrl);
    defaultPoster = "https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png"

    render() {
        return (
        <Card className={styles.cardItem} style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'400px'} src={this.props.poster || this.defaultPoster} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.year}
                </Card.Text>
                {this.showLink && <Card.Link href={`${this.props.baseAdditionalInfoUrl}/${this.props.id}`}>Go To IMDb</Card.Link>}
                <Rank stars={this.props.rate} paintStarOption={true}/>
                <Button onClick={() => this.props.deleteMovie(this.props.id)} variant="danger"><Trash2 /></Button>
            </Card.Body>
        </Card>
        )
    }
}

function isValidUrl(url: string): boolean {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return regex.test(url)
}
