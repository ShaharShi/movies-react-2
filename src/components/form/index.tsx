import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Rank from '../rank';
import Dropdown from 'react-bootstrap/Dropdown';

interface IProps {
    showForm: boolean,
}

export default function MovieForm(props: IProps) {
    const { showForm } = props
    const numOfStarsArr = new Array(5).fill(true, 0)

    if (!showForm) return <React.Fragment></React.Fragment>
    return (
        <Form className={`w-100 my-3 p-3 bg-light`}>
            <Form.Row>
                <Col>
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control />
                </Col>
                <Col>
                    <Form.Label>Poster Image</Form.Label>
                    <Form.Control placeholder="Insert Full URL" />
                </Col>
                <Col>
                    <Form.Label>Rate The Movie</Form.Label>
                    <Dropdown className={"d-block w-100"}>
                        <Dropdown.Toggle className={"w-100"} variant="secondary">
                            Rate By Star 
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={"w-100"}>
                            {numOfStarsArr.map((_, i) => { return <Dropdown.Item><Rank stars={i + 1} paintStarOption={false}/></Dropdown.Item>})}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>IMDb ID</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Release Year</Form.Label>
                    <Form.Control />
                </Col>
                <Col className={"d-flex align-items-end justify-content-center"}>
                    <Button className={"w-100"}>Submit</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}