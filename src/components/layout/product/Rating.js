import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: "",
            selectedModel: "",
            selectedModelPrice: 0,
            rating: 0,
            isValidColor: false,
            isValidModel: false,
            basketClicked: true,
            open: false
        };
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };

    colorChoose = (e) => {
        this.setState({ selectedColor: e.target.value });

        if (e.target.value !== "none") { this.setState({ isValidColor: true }, this.updateValidity) }
        else { this.setState({ isValidColor: false }, this.updateValidity) }

    }

    modelChoose = (e) => {
        this.setState({ selectedModel: e.target.value });
        let selInd = this.props.modelArr.indexOf(e.target.value);
        this.setState({ selectedModelPrice: this.props.prices[selInd] });

        if (e.target.value !== "none") { this.setState({ isValidModel: true }, this.updateValidity) }
        else { this.setState({ isValidModel: false }, this.updateValidity) }
    }

    updateValidity() {
        if (this.state.isValidColor && this.state.isValidModel) { this.setState({ basketClicked: false }) }
        else { this.setState({ basketClicked: true }) }
    }

    ratingChanged = (newRating) => {
        this.setState({ rating: newRating })
    }

    addTOCart = () => {
        this.setState({ basketClicked: true });
        this.props.updateCart(1, this.props.name, this.state.selectedColor, this.state.selectedModel, this.state.selectedModelPrice);
        this.setState({ open: true });
    }

    render() {
        return (
            <div>
                <select
                    value={this.state.selectedColor}
                    onChange={this.colorChoose}
                >
                    <option value="none">Choose your color</option>
                    {this.props.colors.map((color, index) => {
                        return <option key={index} value={color}>{color}</option>
                    })}
                </select>

                <select
                    value={this.state.selectedModel}
                    onChange={this.modelChoose}
                    style={{ marginLeft: '20px' }}
                >
                    <option value="none">Choose a model</option>
                    {this.props.modelArr.map((model, index) => {
                        return <option key={index} value={model}>{model}</option>
                    })}
                </select>
                <br /><br />

                <Button variant="secondary" style={{ borderRadius: '20%', margin: '10px 0' }} disabled={this.state.basketClicked} onClick={this.addTOCart}>Add to basket</Button>{' '}
                <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        The product is successfully added to the cart
                    </Alert>
                </Snackbar>

                <div style={{ margin: '20px 9rem' }}>
                    Rate this product
                        <ReactStars
                        count={5}
                        onChange={this.ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
        )
    }
}
