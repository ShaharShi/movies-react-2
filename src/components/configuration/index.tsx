import React, { useState, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

interface IProps {
    showConfig: boolean,
    setAppTheme: Function
}

export default class AppConfiguration extends Component< IProps, any >  {

    constructor(props: IProps) {
        super(props)
        this.state = {
            colorValue: ""
        };
    }
    
    handleInputChange(e: any) {
        const { target } = e;
        this.setState({
            colorValue: target.value
        })
    }
    handleSubmit() {
        this.props.setAppTheme(this.state.colorValue)
    }
    
    render() {
        if (!this.props.showConfig) return <React.Fragment></React.Fragment>
        return (
            <div className={"w-100 my-3 p-3 bg-light"}>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label>Write a Color for App Theme</Form.Label>
                            <Form.Control onChange={(e) => {this.handleInputChange(e)}} name={"confColor"} placeholder={"red, greenyellow, rgb(0,0,0), #ffffff etc..."}/>
                        </Col>
                        <Col className={"d-flex align-items-end"}>
                            <Button onClick={this.handleSubmit.bind(this)} variant={"success"}>Submit</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}