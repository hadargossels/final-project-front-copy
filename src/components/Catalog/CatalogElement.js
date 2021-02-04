import {Link} from 'react-router-dom'
import Rating from "../Product/Rating";
import './CatalogElement.css'
import { CatalogPrice } from './CatalogPrice';

const CatalogElement = ({ id, img, name, rating, platforms, price,discount }) => (
  <div className="col-lg-4 col-md-6 mb-2">
    <div className="imgContain">
      <img src={img} alt="" className="rounded img-fluid" /> 
    </div>
   
    <div className="d-grid gap-2 d-md-flex float-end">
      <button className="mt-2 btn btn-outline-primary me-md-1" type="button">
        <i className="fas fa-shopping-cart"></i>
      </button>
      <button className="mt-2 btn btn-outline-danger" type="button">
        <i className="far fa-heart"></i>
      </button>
    </div>
    <Link style={{textDecoration:"none"}} to={`/product/${name}`}>
      <h3 className="catalog-title">{name}</h3>
    </Link>
    
    <CatalogPrice discount={discount} price={price}/>
    <p className="text-danger">{platforms}</p>
    <Rating rating={rating} />
  </div>
);

export default CatalogElement;
