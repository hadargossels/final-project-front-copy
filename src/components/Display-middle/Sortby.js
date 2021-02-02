function Sortby({sort}) {
   
    
   
    return (
      <div>
          <select onChange={(e)=>sort(e.target.value)} className="form-select" id="mySelect" aria-label="Default select example" >
                <option selected>sort by:</option>
                <option value="lowToHight" >Price-low to high</option>
                <option value="hightToLow" >Price-high to low</option>

          </select>
      </div>
    );
  }
  
  export default Sortby;