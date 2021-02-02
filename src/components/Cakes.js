
import React, { Component } from 'react';
import './Cakes.css';


const data = [
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' }, 
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
   { img: '/images/cake 1.jpeg', alt: 'PHOTO', desc: 'עוגה עוגה עוגה במגל נחוגה' },
]



class Cakes extends Component {


   render() {


      return (
         <div className="myContainer">
            {data.map((el, key) => (
               <div className="myBox" key={key}>
                  <img src={el.img} alt={el.alt}></img>
                  <div className="details">
                     <p>{el.desc}</p>
                  </div>
               </div>
            ))}
         </div>

         //  <div className="myContainer">

         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>
         //       <div className="myBox">
         //          <img src="/images/cake 1.jpeg" alt="PHOTO"></img>
         //          <div className="details">
         //             <p>עוגה עוגה עוגה במגל נחוגה</p>
         //          </div>
         //       </div>



         //  </div>
      );
   }
}
export default Cakes;