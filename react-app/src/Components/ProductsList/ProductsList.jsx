import { Link } from 'react-router-dom';
import ratingStars from '../../js/script';

export default function ProductsList(props) {

    let addNotify;
    let status;
    let price;
    let newPrice;
    
    if (props.stock) {
        addNotify = <a href="#" className="btn btn-outline-primary" role="button">Add To <i className="fas fa-shopping-cart"></i></a>;
        status = <span className="text-success">In Stock</span>;
    }

    else {
        addNotify = <a href="#" className="btn btn-outline-danger" role="button">Notify Me</a>;
        status = <span className="text-danger">Out of Stock</span>;
    }

    if (props.discount) {
        price =  <p style={{textDecoration: "line-through"}}>Price: ₪{props.price.toFixed(2)}</p>;
        newPrice = <p className="text-danger" style={{fontSize: "x-large"}}><strong>Discount: ₪{(props.price*(1-props.discountPercentage)).toFixed(2)}</strong></p>;
    } 

    else {
        price = <p style={{fontSize: "x-large"}}><strong>Price: ₪{props.price.toFixed(2)}</strong></p>;
        newPrice = <p style={{visibility: "hidden"}}>.</p>;
    }

    return(
        <div className="col-md-4 text-center col-sm-6 col-xs-6">
            <div className="thumbnail product-box">
                <Link to={"/store/products/"+props.alt}>
                    <img src={props.img} alt={props.alt} height="150px"/>
                </Link>
                    <div className="caption">
                        {/*https://forum.bootstrapstudio.io/t/dynamic-text-sizing/4282*/}
                        <Link to={"/store/products/"+props.alt}>
                            <h3 style={{fontSize: "calc(0.9em + 0.1vw)"}}>{props.title}</h3><br/>
                        </Link>
                        {price}
                        {newPrice}
                        <p>Ratings:&emsp;{ratingStars(props.rating)}</p>
                        <p>Status:&emsp;{status}</p>
                        <p>Lorem ipsum</p>
                        <p>{addNotify} <Link to={"/store/products/"+props.alt}><span className="btn btn-outline-success" role="button">More Details</span></Link></p>
                    </div>
            </div>
        </div>
    );
}
