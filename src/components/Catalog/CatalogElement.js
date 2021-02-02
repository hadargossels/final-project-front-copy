import Rating from "../Product/Rating";

const CatalogElement = ({ img, name, rating, platforms, price }) => (
  <div className="col-lg-4 col-md-6 mb-2">
    <img src={img} alt="" className="rounded img-fluid" />
    <div className="d-grid gap-2 d-md-flex float-end">
      <button className="mt-2 btn btn-outline-primary me-md-1" type="button">
        <i className="fas fa-shopping-cart"></i>
      </button>
      <button className="mt-2 btn btn-outline-danger" type="button">
        <i className="far fa-heart"></i>
      </button>
    </div>
    <h3 className="catalog-title">{name}</h3>
    <h3 className="text-danger">{price.toFixed(2)}$</h3>
    <p className="text-danger">{platforms}</p>
    <Rating rating={rating} />
  </div>
);

export default CatalogElement;
