import React, { Component } from 'react';

class AlsoViewed extends Component{
    render(){
       return(
          <div className = "text-center py-2">
             <p className="h5">Customers who viewed this game also viewed</p>
             <div className = "py-3 d-flex justify-content-center flex-wrap text-primary">
                 <div>
                    <img className="m-2" width="150px" src="/img/gameImg2.jpg"></img>
                    <p>Atelier Ryza 2</p>
                 </div>
                 <div>
                    <img className="m-2" width="150px" src="/img/gameImg3.jpg"></img>
                    <p>Atelier Lydie & Suelle</p>
                 </div>
                    
                </div>
          </div>
       );
    }
 }

export default AlsoViewed;