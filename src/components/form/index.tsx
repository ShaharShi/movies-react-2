import React, { useState } from 'react';
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

export default function MovieForm(props: IProps) {
    const { showForm, newMovie } = props
    const numOfStarsArr = new Array(5).fill(true, 0)
    const state = {
        Title: "",
        Poster: "",
        rank: 0,
        imdbID: "",
        Year: "",
        Type: "",
    }
    const [formProps, setNewProp] = useState(state)

    function handleSelect(e: any) {
        setNewProp({...formProps, rank: Number(e)})
    }
    function handleInputChange(e: any) {
        const { target } = e;
        const { name , value } = target;
        setNewProp({...formProps, [name]: value})
    }
    
    function handleSubmit(e: any) {
        e.preventDefault()
        newMovie(formProps)
    }

    if (!showForm) return <React.Fragment></React.Fragment>;
    return (
        <Form onSubmit={(e) => {handleSubmit(e)}} className={`${styles.movieForm} w-100 my-3 p-3 bg-light`}>
            <Form.Row>
                <Col>
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control onChange={handleInputChange} name={"Title"}/>
                </Col>
                <Col>
                    <Form.Label>Poster Image</Form.Label>
                    <Form.Control onChange={handleInputChange} name={"Poster"} placeholder="Insert Full URL" />
                </Col>
                <Col>
                    <Form.Label>Rate The Movie</Form.Label>
                    <Dropdown className={"d-block w-100"}>
                        <Dropdown.Toggle className={"w-100"} variant="secondary">
                            Rate By Star 
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={"w-100"}>
                            {numOfStarsArr.map((_, i) => { return <Dropdown.Item onSelect={(e: any) => {handleSelect(e)}} value={i + 1} eventKey={`${i + 1}`}><Rank stars={i + 1} paintStarOption={false}/></Dropdown.Item>})}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>IMDb ID</Form.Label>
                    <Form.Control onChange={handleInputChange} name={"imdbID"}/>
                </Col>
                <Col>
                    <Form.Label>Release Year</Form.Label>
                    <Form.Control onChange={handleInputChange} name={"Year"}/>
                </Col>
                <Col>
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={handleInputChange} name={"Type"} placeholder={"Movie, Series ..."}/>
                </Col>
                <Col className={"d-flex align-items-end"}>
                    <Button type={'submit'} className={"w-100"} >Submit</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}