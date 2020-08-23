import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

interface IProps {
    showConfig: boolean,
    setAppTheme: Function
}

export default function AppConfiguration(props: IProps){
    const { showConfig, setAppTheme } = props;
    const [colorValue, setColorValue] = useState("")

    function handleInputChange(e: any) {
        const { target } = e;
        setColorValue(target.value)
    }
    function handleSubmit() {
        setAppTheme(colorValue)
    }

    if (!showConfig) return <React.Fragment></React.Fragment>
    return (
        <div className={"w-100 my-3 p-3 bg-light"}>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Label>Write a Color for App Theme</Form.Label>
                        <Form.Control onChange={(e) => {handleInputChange(e)}} name={"confColor"} placeholder={"red, greenyellow, rgb(0,0,0), #ffffff etc..."}/>
                    </Col>
                    <Col className={"d-flex align-items-end"}>
                        <Button onClick={handleSubmit} variant={"success"}>Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}