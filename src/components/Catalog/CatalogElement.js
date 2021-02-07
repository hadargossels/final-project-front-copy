import {Link} from 'react-router-dom'
import Rating from "../Product/Rating";
import './CatalogElement.css'
import { CatalogPrice } from './CatalogPrice';

const CatalogElement = ({ img, name, rating, platforms, price,discount }) => (
  <div className="col-lg-4 col-md-6 mb-1">
   
    <div className="row">
      <div className="imgContain">
        <img src={img} alt="" className="rounded img-fluid" /> 
      </div>
      <div className="col-9 ">
        <Link style={{textDecoration:"none"}} to={`/product/${name}`}>
          <h3 className="catalog-title p-0">{name}</h3>
        </Link>
      
        <CatalogPrice discount={discount} price={price}/>
        <h6 className="text-danger fw-normal">{platforms}</h6>
        <Rating rating={rating} />
      </div>
      <div className="col-2  p-0">

          <button className="mt-2 btn btn-outline-primary m-0 " type="button">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="heart mt-2 btn btn-outline-danger m-0 " type="button">
            <i className="far fa-heart"></i>
          </button>

      </div>
    </div>
    

  </div>
);

export default CatalogElement;
