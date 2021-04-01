import {Link} from 'react-router-dom'
import Rating from "../Product/Rating";
import CartButton from './CartButton/CartButton';
import { CatalogPrice } from './CatalogPrice';
import './CatalogElement.css'

const CatalogElement = ({ id, img, name, rating, platform, price, discount ,imgNarrow, shortDescription}) => {
  return(
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
        <h6 className="text-danger fw-normal">{platform.platformName}</h6>
        <Rating rating={rating} />
      </div>
      <div className="col-2  p-0">
        
        <CartButton id={id}/>
        <button className="widenIcon mt-2 btn btn-outline-danger m-0 " type="button">
          <i className="far fa-heart"></i>
        </button>
        <button className="widenIcon btn btn-outline-success mt-2 m-0" data-bs-toggle="modal" data-bs-target={`#id${id}`}>
          <i className="fas fa-search-plus"></i>
        </button>

          {/* Quick-view */}
        <div className="modal fade" id={`id${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row mb-3">
                    <div className="col-6">
                    <img src={imgNarrow} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-6">
                      <h4>{name}</h4>
                      <CatalogPrice discount={discount} price={price}/>
                      <p>{platform.platformName}</p>
                      <CartButton page="quickview" id={id}/>
                      <button className="mt-2 btn-lg btn btn-outline-danger w-100" type="button">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                  </div>
                    <ul>{shortDescription.map((line,key)=> <li className="text-start" key={key}>{line}</li>)}</ul>
                </div>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
        </div>
      </div>

    </div>
  </div>
    

  </div>
)};

export default CatalogElement;
