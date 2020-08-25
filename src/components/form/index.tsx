import React, { useState, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Rank from '../rank';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './style.module.css'

interface IProps {
    newMovie: Function,
    showForm: boolean,
}

export default class MovieForm extends Component < IProps, any > {
    
    numOfStarsArr = new Array(5).fill(true, 0)
    constructor(props: IProps) {
        super(props)
        this.state = {
            Title: "",
            Poster: "",
            rank: 0,
            imdbID: "",
            Year: "",
            Type: "",
        }
    }

    handleSelect(e: any) {
        this.setState({rank: Number(e)})
    }
    handleInputChange(e: any) {
        const { target } = e;
        const { name , value } = target;
        this.setState({[name]: value})
    }
    
    handleSubmit(e: any) {
        e.preventDefault()
        this.props.newMovie(this.state)
    }

    render() {
        if (!this.props.showForm) return null;
        return (
            <Form onSubmit={(e) => {this.handleSubmit(e)}} className={`${styles.movieForm} w-100 my-3 p-3 bg-light`}>
                <Form.Row>
                    <Col>
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control onChange={this.handleInputChange.bind(this)} name={"Title"}/>
                    </Col>
                    <Col>
                        <Form.Label>Poster Image</Form.Label>
                        <Form.Control onChange={this.handleInputChange.bind(this)} name={"Poster"} placeholder="Insert Full URL" />
                    </Col>
                    <Col>
                        <Form.Label>Rate The Movie</Form.Label>
                        <Dropdown className={"d-block w-100"}>
                            <Dropdown.Toggle className={"w-100"} variant="secondary">
                                Rate By Star 
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={"w-100"}>
                                {this.numOfStarsArr.map((_, i) => { return <Dropdown.Item onSelect={(e: any) => {this.handleSelect(e)}} value={i + 1} eventKey={`${i + 1}`}><Rank stars={i + 1} paintStarOption={false}/></Dropdown.Item>})}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>IMDb ID</Form.Label>
                        <Form.Control onChange={this.handleInputChange.bind(this)} name={"imdbID"}/>
                    </Col>
                    <Col>
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control onChange={this.handleInputChange.bind(this)} name={"Year"}/>
                    </Col>
                    <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Control onChange={this.handleInputChange.bind(this)} name={"Type"} placeholder={"Movie, Series ..."}/>
                    </Col>
                    <Col className={"d-flex align-items-end"}>
                        <Button type={'submit'} className={"w-100"} >Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}