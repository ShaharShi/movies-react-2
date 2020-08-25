import React, { useState, Component } from "react"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface IProps {
    filterOperation: Function
}

export default class Filter extends Component < IProps, any > {

    constructor(props: IProps) {
        super(props)
        this.state = {
            filterValue: ""
        }
    }

    setFilterValue(valueToSearch: string) {
        this.setState({
            filterValue: valueToSearch
        })
    }

    render() {
    return <div>
        <InputGroup className="mb-3">
            <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => this.setFilterValue(e.target.value)}
                value={this.state.filterValue}
            />
            <Button className={"mr-2"} onClick={() => { this.props.filterOperation(this.state.filterValue) }}> Filter </Button>
            <Button className={"mr-2"} onClick={() => { this.setFilterValue(""); this.props.filterOperation("") }}> Clear </Button>
        </InputGroup>

    </div>
    }
}