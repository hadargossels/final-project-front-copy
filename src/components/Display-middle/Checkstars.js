function Checkstars({sortStars}) {
        
    return (
        <div>
            <a href="#" onClick={(e)=>sortStars(-1)} id="clear">Clear</a>
            <div className="form-check">
                <input onClick={(e)=>sortStars(e.target.name)} className="form-check-input" type="checkbox" name="asdasd" id="flexCheckDefault" name="4"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                <i className="fas fa-star starsort"></i><i className="fas fa-star starsort"></i><i className="fas fa-star starsort"></i><i className="fas fa-star starsort"></i>   & up
                </label>
                </div>
            <div className="form-check">

                <input onClick={(e)=>sortStars(e.target.name)} className="form-check-input" type="checkbox" name="asdasd" id="flexCheckDefault1" name="3"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                <i className="fas fa-star starsort"></i><i className="fas fa-star starsort"></i><i className="fas fa-star starsort"></i>   & up
                </label>
            </div>
            <div className="form-check">

                <input onClick={(e)=>sortStars(e.target.name)} className="form-check-input" type="checkbox" name="asdasd" id="flexCheckDefault2" name="2"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                <i className="fas fa-star starsort"></i><i className="fas fa-star starsort "></i>   & up
                </label>
            </div>
            <div className="form-check">
                <input onClick={(e)=>sortStars(e.target.name)} className="form-check-input" type="checkbox" name="asdasd" id="flexCheckDefault3" name="1"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                <i className="fas fa-star starsort"></i>   & up
                </label>
            </div>
               
                
        </div>
    );
  }
  
  export default Checkstars;

