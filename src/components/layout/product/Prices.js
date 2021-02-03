import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class Prices extends Component {
    render() {
        return (
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>128GB 12GB RAM</td>
                        <td>256GB 12GB RAM</td>
                        <td>512GB 16GB RAM</td>
                    </tr>
                    <tr style={{ color: 'red' }}>
                        <td>$950.00</td>
                        <td><span style={{ textDecoration: 'line-through' }}>$1,259.99</span> $ 1,030.96</td>
                        <td><span style={{ textDecoration: 'line-through' }}>$$1,599.00</span> $979.99 </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
