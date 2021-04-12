import axios from 'axios';
import React, { Component } from 'react'
import './Faq.css'

export class Faq extends Component {

    constructor(props) {
        super(props)
        this.state = {
            faq: [],
        }
    }

    componentDidMount () {
        this.getFaq();
     }


     
     async getFaq() {
     try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/faq/`);
        this.setState({faq: response.data});        
     } catch (error) {
        console.error(error);
     }
     }

    render() {
        return (
            <div className='faq'>
                <h3>FAQ</h3>
                {this.state.faq.map((v,index)=>
                <div key={index}>
                <h4 className='qutitle'>{v.title}</h4>
                <p className='qupara'>{v.content}</p>
                </div>
                )}
            </div>
        )
    }
}

export default Faq
