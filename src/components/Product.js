import './Product.css';

function Product(){
      return(
        <div className="margin-top-product ms-5">
        <div className="d-flex flex-row bd-highlight flex-wrap justify-content-center">
               <div id="carouselExampleFade" className="carousel slide carousel-fade p-2 bd-highlight " data-bs-ride="carousel">
                   
                   <div className="carousel-inner img-size">
                       <div className="carousel-item active">
                       <div className="container">
                           <img src="/images/cake 1.jpeg" className="d-block w-100 img-size" alt="cake"></img>
                           </div>
                       </div>
                       <div className="carousel-item">
                           <div className="container">
                               <img src="/images/cake 2.jpeg" className="d-block w-100 img-size" alt="cake"></img>
                           </div>
                       </div>
                       <div className="carousel-item">
                           <div className="container">
                               <img src="/images/cake 3.jpeg" className="d-block w-100 img-size" alt="cake"></img>
                           </div>
                       </div>
                   </div>
                   <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Previous</span>
                   </a>
                   <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                       <span className="carousel-control-next-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Next</span>
                   </a>
               </div>
           

               <div className="card bd-highlight mt-1 p-5" style={{"direction":"rtl"}} >
                   <div className="card-body fs-4">
                       <h3 className="card-title">טארט פירות העונה</h3>
                       <p className="card-text">בצק פריך ממולא בקרם פטיסייר ופירות העונה.</p>
                       <p className="card-text">מחיר:  קטן  30₪   /  גדול 140₪</p>
                   </div>
                   
                   <div className="card-body">

                   <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                       <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autoComplete="off"></input>
                       <label class="btn btn-outline-danger" htmlFor="btnradio1">גדול</label>

                       <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autoComplete="off" ></input>
                       <label class="btn btn-outline-danger" htmlFor="btnradio2">קטן</label>

                   </div>
                   <br></br><br></br><br></br><br></br>
                   <div>
                       <button type="button" class="btn btn-outline-danger">הוסף לסל</button>
                   </div>
                       
                   </div>
               </div>
        </div>
        </div>
      );
   }

export default Product;