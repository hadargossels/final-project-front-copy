import React from 'react';
import {Carousel, Form, Button} from 'react-bootstrap';
import image1 from '../img/sheets1.png';
import image2 from '../img/sheets2.png';
import image3 from '../img/sheets3.png';

class ProductPage extends React.Component {
    state = {
        name: "Siten sheets",
        description: "Satin bedding is made of 100% combed cotton with a smooth, glossy and pleasant to the touch finish.",
        images: [image1, image2, image3],
        price: 200,
        discount: 0.25,
        stars: 4,
        category: "bedroom",
        subcategory: "bedding",
        inStock: true,
        deliver: true,
        favorate: false
    };

    createStars = () => {
        let fiveStars = []
        for (let j = 0; j < 5; j++) {
            if (j<this.state.stars)
                fiveStars.push(<i className="fas fa-star" key={j}></i>);
            else
            fiveStars.push(<i className="far fa-star" key={j}></i>);
        }
        return fiveStars;
    };

    createQtyList = () => {
        const qtyList = [];
        for(let i=1; i<=10; i++){
            qtyList.push(<option key={i}>{i}</option>);
        }
        return qtyList;
    }

    isInStock = () => {
        if (this.state.inStock)
            return <h4 className="text-success">In Stock</h4>
        else
            return <h4 className="text-danger">Out of Stock</h4>
    }

    isFavorate = () => {
        if (this.state.favorate)
            return <i id="favorateIcon" className="fas fa-heart ml-2" onClick={this.changeFavorate}></i>
        else
            return <i id="favorateIcon" className="far fa-heart ml-2" onClick={this.changeFavorate}></i>
    }

    changeFavorate = () => {
        if (this.state.favorate) {
            this.setState({favorate: false});
        }
        else
            this.setState({favorate: true});
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 product-image">
                        <div className="row">
                            <div className="col-sm-12">
                                <Carousel
                                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{backgroundColor:'rgb(128, 128, 128, 0.7)',color:'green'}}/>}
                                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{backgroundColor:'rgb(128, 128, 128, 0.7)',color:'green'}}/>}
                                    >
                                    {this.state.images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img className="d-block w-100" src={image} alt="First slide"/>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            
                            <div className="col-sm-12">
                                <div className="row">
                                    {this.state.images.map((image, index) => (
                                        <div className="col-sm-4" key={index}>
                                            <img src={image} alt="First slide" style={{width:"100%", height:"100%"}}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 product-details">
                        <div id="ProdectTitle" className="mt-5">
                            <h1>{this.state.name}</h1>
                            {this.createStars()}
                            <h2>{this.state.discount * 100}% off</h2>
                            <h3><span style={{textDecoration: "line-through"}}>${this.state.price}</span> ${this.state.price * (1- this.state.discount)}</h3>
                        </div>
                        <Form>
                            <Form.Group controlId="qty" className="d-inline-flex">
                                <Form.Label className="p-2">Qty:</Form.Label>
                                <Form.Control as="select" className="p-2 col-sm-8">
                                {this.createQtyList()}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="d-flex align-items-center">
                            <Button variant="primary" className="px-5">Add to bag</Button>
                            {this.isFavorate()}
                            
                        </div>
                        <div id="ProductOtherDetails" className="mt-5">
                            {this.isInStock()}
                            <p><strong>Description:</strong> {this.state.description}</p>
                            <p><strong>Category:</strong> {this.state.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPage;