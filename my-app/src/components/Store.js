import React, { Component } from 'react';
import './Store.css';

const product = [
    {src: "img/souffle1.jpg",
             category: 'pens',
             brand: 'aa',
             color: 'aa',
             price: 10,
             name: 'aa',
             id: 1
             },
    {src: "img/souffle_2.jpg",
     category: 'pencils',
     brand: 'aa',
     color: 'aa',
     price: 15,
     name: 'aa',
     id: 2
     }
 ]
const priceHighArr = []
 const priceHigh = () => {
    for (let i = 0; i < product.length; i++) {
        for (let j = 0; j < product.length; j++) {
            if (product[i].price > product[j].price) {
                let temp = 
                priceHighArr.push(product)
            }
        }
        

    }
 }


class Store extends Component{
    constructor(props) {
        super(props);
        this.createProd = this.createProd.bind(this);
      }

    createProd (prod) {
        return (<div className='product'>
                    <img src={prod.src} alt='product' width='250px'/>
                    <span className='prodName'>{prod.name}</span>
                    <span className='price'>{prod.price}$</span>
                </div>
        )
    }

   render(){
      return(
          <div className='storeCont'>
              <div className='filter'>
                  <div className='sort filterDiv'>
                      <span className='title'>Sort By:</span><br/>
                      <select className='sortSel'>
                          <option>Price: Low - High</option>
                          <option>Price: High - Low</option>
                      </select>
                  </div>
                  <div className='category filterDiv'>
                  <span className='title'>Category:</span><br/>
                    <input type="checkbox" id="pens" name="pens" value="pens" />
                    <label for="pens"> Pens</label><br/>
                    <input type="checkbox" id="pencils" name="pencils" value="pencils" />
                    <label for="pencils"> Pencils</label><br/>
                    <input type="checkbox" id="diaries" name="diaries" value="diaries"/>
                    <label for="diaries"> Diaries & Planners</label><br/>
                    <input type="checkbox" id="notebooks" name="notebooks" value="notebooks"/>
                    <label for="notebooks"> Notebooks & Pads</label><br/>
                    <input type="checkbox" id="school" name="school" value="school"/>
                    <label for="school"> School & Office Supplies</label><br/>
                    <input type="checkbox" id="folders" name="folders" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                  </div>
                  <div className='brands filterDiv'>
                  <span className='title'>Brands:</span><br/>
                    <input type="checkbox" id="folders" name="folders" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                    <input type="checkbox" id="folders" name="folders" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                    <input type="checkbox" id="folders" name="folders" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                    <input type="checkbox" id="folders" name="folders" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                  </div>
                  <div className='color filterDiv'>
                  <span className='title'>Color:</span><br/>
                    <input type="checkbox" id="black" name="black" value="black"/>
                    <label for="black"> Black</label><br/>
                    <input type="checkbox" id="white" name="white" value="white"/>
                    <label for="white">White</label><br/>
                    <input type="checkbox" id="purple" name="purple" value="purple"/>
                    <label for="purple"> Purple</label><br/>
                    <input type="checkbox" id="blue" name="blue" value="blue"/>
                    <label for="blue"> Blue</label><br/>
                    <input type="checkbox" id="green" name="green" value="green"/>
                    <label for="green"> Green</label><br/>
                    <input type="checkbox" id="yellow" name="yellow" value="yellow"/>
                    <label for="yellow"> Yellow</label><br/>
                    <input type="checkbox" id="orange" name="orange" value="orange"/>
                    <label for="orange"> Orange</label><br/>
                    <input type="checkbox" id="red" name="red" value="red"/>
                    <label for="red"> Red</label><br/>
                    <input type="checkbox" id="pink" name="pink" value="pink"/>
                    <label for="pink"> Pink</label><br/>
                    <input type="checkbox" id="multi" name="multi" value="multi"/>
                    <label for="multi">Multi</label><br/>
                  </div>
                  <div className='price filterDiv'>
                  <span className='title'>Price:</span><br/>
                    <input type="checkbox" id="0-10" name="0-10" value="0-10"/>
                    <label for="0-10">0-10 USD</label><br/>
                    <input type="checkbox" id="11-20" name="11-20" value="11-20"/>
                    <label for="11-20">11-20 USD</label><br/>
                    <input type="checkbox" id="21-30" name="21-30" value="21-30"/>
                    <label for="21-30">21-30 USD</label><br/>
                    <input type="checkbox" id="31-40" name="31-40" value="31-40"/>
                    <label for="31-40">31-40 USD</label><br/>
                    <input type="checkbox" id="41-50" name="41-50" value="41-50"/>
                    <label for="41-50">41-50 USD</label><br/>
                  </div>
              </div>
              <div className='storeDisp'>
              {this.createProd(product[0])}
              {this.createProd(product[1])}
              </div>
          </div>
        

      );
   }
}
let display = [];

const checkboxes = document.querySelectorAll("input[type=checkbox]");
console.log(checkboxes)

checkboxes.forEach((checkbox) => {
 checkbox.addEventListener('change', function() {
   display = 
     Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
     .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
     .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
  
   console.log(display)
 })
});

export default Store;
