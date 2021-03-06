
import React from "react";

const SpinnerPage = () => {
    return (
      <>
        <div className="spinner-border" role="status" style={{fontSize:"30vw"}}>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  }
  
  export default SpinnerPage;