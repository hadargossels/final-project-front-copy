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
     },
     {src: "img/notebooks/noteb1.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 6,
     name: 'aa',
     id: 3
     },
     {src: "img/notebooks/noteb2.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 23,
     name: 'aa',
     id: 4
     },
     {src: "img/notebooks/noteb3.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 8,
     name: 'aa',
     id: 5
     },
     {src: "img/notebooks/noteb4.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 9,
     name: 'aa',
     id: 6
     },
     {src: "img/notebooks/noteb5.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 11,
     name: 'aa',
     id: 7
     },
     {src: "img/notebooks/noteb6.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 7,
     name: 'aa',
     id: 8
     },
     {src: "img/notebooks/noteb7.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 18,
     name: 'aa',
     id: 9
     },
     {src: "img/notebooks/noteb8.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 14,
     name: 'aa',
     id: 10
     },
     {src: "img/notebooks/noteb9.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 18,
     name: 'aa',
     id: 11
     },
     {src: "img/notebooks/noteb10.jpg",
     category: 'notebooks',
     brand: 'aa',
     color: 'aa',
     price: 18,
     name: 'aa',
     id: 12
     }
 ]

class Store extends Component{
    constructor() {
      super();

      this.state = {
      product: product,
      display: [],
      checked: []
    }
    this.isChecked = this.isChecked.bind(this);
    this.filter = this.filter.bind(this);
      }


    sort (e) {
      let byPrice =  this.state.product
      if (e.target.value === 'high')
      byPrice.sort((a, b) => b.price - a.price);
      else if (e.target.value === 'low')
      byPrice.sort((a, b) => a.price - b.price);
      this.setState({product: byPrice})
    }

    isChecked (e) {
      let checkbox = e.target.value
      let checkedBox =[...this.state.checked]
      if(e.target.checked){
        checkedBox.push(checkbox)
      }
      else {
        checkedBox = checkedBox.filter((v)=>{
          return v !== checkbox
        })
      } 
      setTimeout(()=>{this.setState({checked: checkedBox})
    this.setState({display: []});
    this.filter(e)},300) 
    }

    filter (e) {
      let display = [...this.state.display];
      let filterThat = [...this.state.product];
      let filtered = [];
      
      let name = e.target.name
      let filterby = [...this.state.checked]
      if (name === 'category'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.category === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      else if (name === 'category'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.category === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      else if (name === 'category'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.category === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      else if (name === 'category'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.category === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      else if (name === 'category'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.category === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
        

      setTimeout(()=>{
        this.setState({display: display})
      console.log(this.state.display)
      },300)
    }



   render(){

      return(
          <div className='storeCont'>
              <div className='filter' >
                  <div className='sort filterDiv'>
                      <span className='title'>Sort By:</span><br/>
                      <select className='sortSel' onChange={(e) => this.sort(e)}>
                          <option value='low'>Price: Low - High</option>
                          <option value='high'>Price: High - Low</option>
                      </select>
                  </div>
                  <div className='category filterDiv'>
                  <span className='title'>Category:</span><br/>
                    <input type="checkbox" id="pens" name="category" value="pens" onChange={(e) => this.isChecked(e)}/>
                    <label for="pens"> Pens</label><br/>
                    <input type="checkbox" id="pencils" name="category" value="pencils" onChange={(e) => this.isChecked(e)}/>
                    <label for="pencils"> Pencils</label><br/>
                    <input type="checkbox" id="diaries" name="category" value="diaries"/>
                    <label for="diaries"> Diaries & Planners</label><br/>
                    <input type="checkbox" id="notebooks" name="category" value="notebooks"/>
                    <label for="notebooks"> Notebooks & Pads</label><br/>
                    <input type="checkbox" id="school" name="category" value="school"/>
                    <label for="school"> School & Office Supplies</label><br/>
                    <input type="checkbox" id="folders" name="folders" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                  </div>
                  <div className='brands filterDiv'>
                  <span className='title'>Brands:</span><br/>
                    <input type="checkbox" id="folders" name="brands" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                    <input type="checkbox" id="folders" name="brands" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                    <input type="checkbox" id="folders" name="brands" value="folders"/>
                    <label for="folders"> Filing & Folders</label><br/>
                    <input type="checkbox" id="folders" name="brands" value="folders"/>
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
              {this.state.product.map((v) =>
                  <div className='product' key={v.id}>
                    <img src={v.src} alt='product' width='200px'/><br/>
                    <span className='prodName'>{v.name}</span><br/>
                    <span className='price'>{v.price}$</span>
                  </div>)}
              </div>
          </div>
        

      );
   }
}

export default Store;
