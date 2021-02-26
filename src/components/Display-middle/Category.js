function Category({sortCategory}) {
        
    return (
        <div>
            <div className="form-check" onClick={(e)=>sortCategory(e.target.id)} >
                <input className="form-check-input" type="radio" id="food&bites" name="flexRadioDefault" defaultChecked/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                food&bites
                </label>
            </div>
            <div className="form-check" onClick={(e)=>sortCategory(e.target.id)}>
                <input className="form-check-input" type="radio" id="LUME Collection" name="flexRadioDefault" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                LUME Collection
                </label>
            </div>
            <div className="form-check" onClick={(e)=>sortCategory(e.target.id)}>
                <input className="form-check-input" type="radio" id="Barista" name="flexRadioDefault" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                Barista
                </label>
            </div>
            <div className="form-check" onClick={(e)=>sortCategory(e.target.id)}>
                <input className="form-check-input" type="radio" id="Origin" name="flexRadioDefault" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                Origin
                </label>
            </div>
            <div className="form-check" onClick={(e)=>sortCategory(e.target.id)}>
                <input className="form-check-input" type="radio" id="Pixie" name="flexRadioDefault" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                Pixie
                </label>
            </div>    
            <div className="form-check" onClick={(e)=>sortCategory(e.target.id)}>
                <input className="form-check-input" type="radio" id="Sugar" name="flexRadioDefault" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                Sugar
                </label>
            </div> 
        </div>
    );
  }
  
  export default Category;