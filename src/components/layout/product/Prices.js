import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class Prices extends Component {
    render() {
        return (
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr style={{ fontSize: '0.9em' }}>
                        {this.props.modelArr.map((model, index) => {
                            return <td key={index}>{model}</td>
                        })}
                    </tr>
                    <tr style={{ color: 'red' }}>
                        {this.props.prices.map((model, index) => {
                            return <td key={index}>{model}</td>
                        })}
                    </tr>
                </tbody>
            </Table>
        )
    }
}
